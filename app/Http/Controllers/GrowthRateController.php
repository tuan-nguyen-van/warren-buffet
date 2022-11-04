<?php

namespace App\Http\Controllers;

use App\Models\FinancialMetric;
use App\Models\GrowthRate;
use Illuminate\Http\Request;

class GrowthRateController extends Controller
{
    /**
     * Calculate growth rate for two consecutive years (2010-2011, 2011-2013, 2013 -2014).
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array<array<string,int|float|string>>
     */
    public function calculate(Request $request)
    {
        $financialMetrics = FinancialMetric::where('stock_id', $request->stock_id)->orderBy('year')->get();
        GrowthRate::where('stock_id', $request->stock_id)->where('chosen', 0)->delete();
        $calculatedGrowthRates = [];
        for ($i = 0; $i < count($financialMetrics) - 1; ++$i) {
            $epsCurrentYear = $financialMetrics[$i]->EPS;
            $epsNextYear = $financialMetrics[$i + 1]->EPS;
            // If Next year stock dividend have value then we have to convert to the current year
            // before calculation by this equation: convertedEPSNextYear = EPSNextYear*(1 + nextYearStockDividend/100)
            if ($financialMetrics[$i + 1]->stock_dividend) {
                $epsNextYear *= (1 + $financialMetrics[$i + 1]->stock_dividend / 100);
            }
            $growthRate = ($epsNextYear - $epsCurrentYear) / $epsCurrentYear * 100;
            $growthRate = round($growthRate, 1);
            // save growth rate to database growth_rates with year_from and year_to.
            GrowthRate::create([
                'stock_id' => $request->stock_id,
                'year_from' => $financialMetrics[$i]->year,
                'year_to' => $financialMetrics[$i + 1]->year,
                'value' => $growthRate,
            ]);
            $calculatedGrowthRates[] = $this->formatGrowthRate($financialMetrics[$i]->year, $growthRate);
        }

        return $this->addAverage($calculatedGrowthRates);
    }

    /**
     * @return array<array<string,int|float|string>>
     */
    public function show(int $stockId)
    {
        // Get all the growth rate for stockId then return array like calculate method above
        $calculatedGrowthRates = GrowthRate::where('stock_id', $stockId)
            ->where('chosen', 0)->get();
        $growthRates = [];
        foreach ($calculatedGrowthRates as $calculatedGrowthRate) {
            $growthRates[] = $this->formatGrowthRate($calculatedGrowthRate->year_from, $calculatedGrowthRate->value);
        }

        return $this->addAverage($growthRates);
    }

    /** 
     * @param string       $yearFrom
     * @param string|float $percent
     *
     * @return array{'year': int, "percent": float}
     */
    private function formatGrowthRate($yearFrom, $percent)
    {
        return [
            'year' => (int) $yearFrom,
            'percent' => (float) $percent,
        ];
    }

    /**
     * @param array<array<string,int|float|string>> $growthRates
     *
     * @return array<array<string,int|float|string>>
     */
    private function addAverage(array &$growthRates)
    {
        $sum = 0;
        foreach ($growthRates as $growthRate) {
            $sum += $growthRate['percent'];
        }
        $growthRates[] = ['year' => 'Average', 'percent' => round($sum / count($growthRates), 1)];

        return $growthRates;
    }

    /**
     * Calculate growth rate for chosen years.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response|\Illuminate\Contracts\Routing\ResponseFactory|string
     */
    public function calculateForChosenYears(Request $request)
    {
        $financialMetrics = FinancialMetric::where('stock_id', $request->stock_id)
            ->where('year', '>=', $request->fromYear)
            ->where('year', '<=', $request->toYear)
            ->orderBy('year')
            ->get();
        $length = count($financialMetrics);
        if (!$length) {
            return response('Not found any financial metric', 404);
        }

        if ($financialMetrics[0]->year != $request->fromYear) {
            return response("Not found financial metric for year: $request->fromYear", 404);
        }
        if ($financialMetrics[$length - 1]->year != $request->toYear) {
            return response("Not found financial metric for year: $request->toYear", 404);
        }

        GrowthRate::where('stock_id', $request->stock_id)
            ->where('year_from', $request->fromYear)
            ->where('year_to', $request->toYear)
            ->delete();

        GrowthRate::where('stock_id', $request->stock_id)
            ->where('chosen', 1)
            ->delete();
        // Start calculation
        // If inside a year have stock_dividend then we have to
        // convert it back to the fromYear. Then start the calculation; Eg:
        // Year  | EPS     | stock_dividend
        // 2016  | 1150    | 20 (Do not count this)
        // 2017  | 1883    | 30
        // 2018  | 2630    | 10
        // 2019  | 3450    | 15
        // Then to calculate growth rate from 2016 to 2019 we have to convert EPS from 2019 to 2016.
        // EPS(converted) = EPS(2019) * (1 + Stock_dividend(2019)/100)
        // * (1 + Stock_dividend(2018)/100) * (1 + Stock_dividend(2017)/100)

        // Loop through the array of financial Metrics from 1 (2016 excluded) to lenth
        $product = 1;
        for ($i = 1; $i < $length; ++$i) {
            if ($financialMetrics[$i]->stock_dividend) {
                $product *= 1 + $financialMetrics[$i]->stock_dividend / 100;
            }
        }

        $convertedEpsToYear = $financialMetrics[$length - 1]->EPS * $product;

        // The equation to calculate average growth rate fromYear-toYear through EPS is:
        // R = (A/P) ^ (1/t) - 1
        // R: Annual average interest rate
        // A: Accrued amount (principal + interest)
        // P: Principal amount
        // t: number of years

        $averageGrowthRate = pow(
            $convertedEpsToYear / $financialMetrics[0]->EPS,
            1 / ($request->toYear - $request->fromYear)
        ) - 1;

        $averageGrowthRate = round($averageGrowthRate * 100, 2);

        GrowthRate::create([
            'stock_id' => $request->stock_id,
            'year_from' => $request->fromYear,
            'year_to' => $request->toYear,
            'value' => $averageGrowthRate,
            'chosen' => 1,
        ]);

        return (string) $averageGrowthRate;
    }

    /**
     * @param int $stockId
     *
     * @return GrowthRate
     */
    public function getChosen($stockId)
    {
        $chosenGrowthRate = GrowthRate::where('stock_id', $stockId)->where('chosen', 1)->first();

        return $chosenGrowthRate;
    }
}
