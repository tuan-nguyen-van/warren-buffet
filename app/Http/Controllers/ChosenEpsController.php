<?php

namespace App\Http\Controllers;

use App\Models\ChosenEps;
use Illuminate\Http\Request;

class ChosenEpsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return ChosenEps[]
     */
    public function store(Request $request)
    {
        ChosenEps::where('stock_id', $request->stock_id)->delete();

        return ChosenEps::create($request->all());
    }

    public function show(int $stockId): ?ChosenEps
    {
        return ChosenEps::where('stock_id', $stockId)->first();
    }
}
