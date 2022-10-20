<?php

namespace App\Http\Controllers;

use App\Models\StockHasTenet;
use Illuminate\Http\Request;

class StockHasTenetController extends Controller
{
    /**
     * @return StockHasTenet|bool
     */
    public function store(Request $request)
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

    public function storeNote(Request $request): string
    {
        $stockHasTenet = StockHasTenet::where('stock_id', $request->stock_id)
            ->where('tenet_id', $request->tenet_id)->first();
        if ($stockHasTenet) {
            $stockHasTenet->update(['note' => $request->note]);
        } else {
            StockHasTenet::create($request->all());
        }

        return 'ok';
    }
}
