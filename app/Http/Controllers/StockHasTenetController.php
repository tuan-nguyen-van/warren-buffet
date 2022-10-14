<?php

namespace App\Http\Controllers;

use App\Models\StockHasTenet;
use Illuminate\Http\Request;

class StockHasTenetController extends Controller
{
    public function store(Request $request): StockHasTenet
    {
        $oldData = StockHasTenet::where('stock_id', $request->stock_id)->where('tenet_id', $request->tenet_id)->first();
        if ($oldData) {
            return $oldData->update($request->all());
        }

        return StockHasTenet::create($request->all());
    }

    /**
     * @return StockHasTenet[]
     */
    public function show(int $stockId)
    {
        return StockHasTenet::where('stock_id', $stockId)->get();
    }
}
