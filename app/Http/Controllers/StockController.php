<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Stock::has('intrinsicValueCaculations')->with('intrinsicValueCaculations')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request): int
    {
        $this->validateStockInputs($request, 'store');
        $stock = Stock::create($request->all());

        return $stock->id;
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Stock $stock
     *
     * @return \App\Models\Stock
     */
    public function show(Stock $stock)
    {
        return $stock;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Stock        $stock
     */
    public function update(Request $request, Stock $stock): string
    {
        $this->validateStockInputs($request, 'update');
        $stock->update($request->all());

        return 'success';
    }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\Stock  $stock
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(Stock $stock)
    // {
    //     //
    // }

    /**
     * @param \Illuminate\Http\Request $request
     */
    public function validateStockInputs($request, string $method): void
    {
        $needUnique = $method === 'store' ? '|unique:stocks' : '';
        $request->validate([
            'ticker_symbol' => "required$needUnique|min:3|max:4",
            'company_name' => "required$needUnique|min:10|max:255",
            'website' => "required$needUnique|min:10|max:50",
        ]);
    }
}
