<?php

namespace App\Http\Controllers;

use App\Models\FinancialMetric;
use Illuminate\Http\Request;

class FinancialMetricController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $financialMetric = FinancialMetric::create($request->all());

        return response()->json([
            'id' => $financialMetric->id,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function update(Request $request, FinancialMetric $financialMetric): string
    {
        $financialMetric->update(
            $request->all()
        );

        return 'success';
    }

    /**
     * @param int $stockId
     * 
     * @return FinancialMetric[]
     */
    public function show($stockId)
    {
        $financialMetrics = FinancialMetric::where('stock_id', $stockId)->orderBy('year')->get();

        return $financialMetrics;
    }

    public function destroy(FinancialMetric $financialMetric): string
    {
        $financialMetric->delete();

        return 'success';
    }
}
