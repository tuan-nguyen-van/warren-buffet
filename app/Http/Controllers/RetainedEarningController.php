<?php

namespace App\Http\Controllers;

use App\Models\FinancialMetric;
use App\Models\RetainedEarning;
use Illuminate\Http\Request;

class RetainedEarningController extends Controller
{
    /**
     * @return \Illuminate\Http\Response|\Illuminate\Contracts\Routing\ResponseFactory|int
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
            return response('Not found any data', 404);
        }

        if ($financialMetrics[0]->year != $request->fromYear) {
            return response("Not found data for year: $request->fromYear", 404);
        }
        if ($financialMetrics[$length - 1]->year != $request->toYear) {
            return response("Not found data for year: $request->toYear", 404);
        }
        $value = 0;
        for ($i = 0; $i < $length; ++$i) {
            $value += $financialMetrics[$i]->EPS - $financialMetrics[$i]->money_dividend;
        }

        RetainedEarning::create([
            'stock_id' => $request->stock_id,
            'year_from' => $request->fromYear,
            'year_to' => $request->toYear,
            'value' => $value,
        ]);

        return $value;
    }

    /**
     * @return RetainedEarning
     */
    public function show(int $stockId)
    {
        return RetainedEarning::where('stock_id', $stockId)->first();
    }
}
