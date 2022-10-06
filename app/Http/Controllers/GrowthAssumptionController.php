<?php

namespace App\Http\Controllers;

use App\Models\GrowthAssumption;
use Illuminate\Http\Request;

class GrowthAssumptionController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request): GrowthAssumption
    {
        GrowthAssumption::where('stock_id', $request->stock_id)
            ->where('option', $request->option)->delete();

        return GrowthAssumption::create($request->all());
    }

    /**
     * @param \Illuminate\Http\Request $request
     */
    public function show(Request $request): GrowthAssumption
    {
        return GrowthAssumption::where('stock_id', $request->stock_id)->where('option', $request->option)->first();
    }
}
