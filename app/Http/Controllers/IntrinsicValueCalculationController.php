<?php

namespace App\Http\Controllers;

use App\Models\ChosenEps;
use App\Models\DiscountRate;
use App\Models\GrowthAssumption;
use App\Models\IntrinsicValueCalculation;
use App\Models\Stock;
use Illuminate\Http\Request;

class IntrinsicValueCalculationController extends Controller
{
    /** @var array<array<mixed>> $calculationStep */
    private $calculationStep = [];

    /** @var array<string|int,int|float|mixed[]> $steps */
    private $steps = [];

    /** 
     * @return array<array<mixed>>
     */
    public function store(Request $request)
    {
        $stockId = $request->stockId;

        $currentYear = (int) date('Y');

        // Get the growth assumption option 1 and option 2 from db
        $growthAssuptions = GrowthAssumption::where('stock_id', $stockId)->orderBy('option')->get();

        $discountRate = DiscountRate::first()->value / 100;

        foreach ($growthAssuptions as $growthAssuption) {
            $this->steps = [];
            $this->steps['total_pe'] = 0;

            $growthRateNextTenYears = $growthAssuption->next_10_years / 100;
            for ($year = $currentYear; $year < $currentYear + 10; ++$year) {
                $this->eachYearCalculation($growthRateNextTenYears, $year);
            }
            $this->steps['next_10_years'] = $growthAssuption->next_10_years;

            $growthRateNextTenToTwentyYears = $growthAssuption->next_10_to_20_years / 100;

            for ($year = $currentYear + 10; $year < $currentYear + 20; ++$year) {
                $this->eachYearCalculation($growthRateNextTenToTwentyYears, $year, $growthRateNextTenYears);
            }

            $this->steps['next_10_to_20_years'] = $growthAssuption->next_10_to_20_years;

            // For remained years, we assumed the growth rate is flat (0%)
            // So the intrinsic value of company from 20+1 years to infinity is
            // $totalRemainedYearValue = $discountedValue(20 + 1) * $futureValue(20) * $discount rate
            $totalRemainedYearValue = round(round((1 - $discountRate) ** 21, 2)
                * $this->steps[$year - 1]['future_value']
                / $discountRate, 2);

            $this->steps['total_remained_years']['intrinsic_value'] = $totalRemainedYearValue;

            $this->steps['total_pe'] = round($this->steps['total_pe'] + $totalRemainedYearValue, 2);

            /** @var int $chosenEps */
            $chosenEps = ChosenEps::where('stock_id', $stockId)->first()->chosen_eps;
            $this->steps['chosen_eps'] = $chosenEps;
            $intrinsicPrice = $this->steps['total_pe'] * $chosenEps;
            $this->steps['intrinsic_price'] = round($intrinsicPrice);
            $this->steps['option'] = $growthAssuption->option;
            $this->calculationStep[] = $this->steps;
        }
        IntrinsicValueCalculation::where('stock_id', $stockId)->delete();

        IntrinsicValueCalculation::create([
            'stock_id' => $stockId,
            'discount_rate' => $discountRate * 100,
            'calculation_step' => json_encode($this->calculationStep),
        ]);

        $stock = Stock::find($stockId);
        if ($stock->status === 'Unfinished') {
            $stock->update([
                'status' => 'Unfollowed',
            ]);
        }

        return $this->calculationStep;
    }

    private function eachYearCalculation(float $growthRate, int $year, float $growthRateNextTenYears = null): void
    {
        $baseYear = (int) date('Y') - 1;
        // Growth rate next 10 to 20 years need to have growth rate next 10 years to calculate.
        // If the 3rd argument is null then is next 10 years otherwise is next 10 to 20 years
        if (!$growthRateNextTenYears) {
            $futureValue = round((1 + $growthRate) ** ($year - $baseYear), 2);
        } else {
            $futureValue = round(
                ((1 + $growthRateNextTenYears) ** 10) * ((1 + $growthRate) ** ($year - $baseYear - 10)),
                2
            );
        }

        /** @phpstan-ignore-next-line */
        $this->steps[$year]['future_value'] = $futureValue;
        $discountedValueForYears = $this->discountedValueForYears();
        $this->steps[$year]['discounted_value'] = $discountedValueForYears[$year];

        $intrinsicValue = round($discountedValueForYears[$year] * $futureValue, 2);
        $this->steps[$year]['intrinsic_value'] = $intrinsicValue;

        $this->steps[$year]['growth_rate'] = round($growthRate * 100, 2);

        $this->steps['total_pe'] = round($this->steps['total_pe'] + $intrinsicValue, 2);
    }

    /**
     * @return array<int,float>
     */
    private function discountedValueForYears()
    {
        $discountedValueForYears = [];
        $discountRate = DiscountRate::first()->value / 100;
        $baseYear = (int) date('Y') - 1;
        $currentYear = (int) date('Y');
        for ($year = $currentYear; $year < $currentYear + 20; ++$year) {
            $discountValue = round((1 - $discountRate) ** ($year - $baseYear), 2);
            $discountedValueForYears[$year] = $discountValue;
        }

        return $discountedValueForYears;
    }

    public function show(int $stockId): mixed
    {
        return json_decode(IntrinsicValueCalculation::where('stock_id', $stockId)->first()->calculation_step);
    }
}
