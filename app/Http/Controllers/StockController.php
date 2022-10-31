<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use App\Models\Tenet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StockController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexHome()
    {
        /** $stocks \Illuminate\Database\Eloquent\Collection<int,Stock> */
        $stocks = Stock::has('intrinsicValueCaculations')
            ->where('status', 'Followed')
            ->with([
                'intrinsicValueCaculations',
                'growthAssumptions',
                'stockHasTenets' => function ($query) {
                    $query->where('value', 1);
                },
                'financialMetrics' => function ($query) {
                    $query->orderBy('year', 'desc');
                },
            ])
            ->get();

        $totalTenets = Tenet::all()->count();

        // Retrieve all financial metrics for stocks.

        return response()->json([
            'stocks' => $stocks,
            'totalTenets' => $totalTenets,
        ]);
    }

    /**
     * @return \Illuminate\Support\Collection<int,Stock>
     */
    public function index()
    {
        return DB::table('stocks')
            ->orderByRaw("FIELD(status, 'Followed', 'Unfollowed', 'Unfinished')")
            ->get();
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

    public function destroy(Stock $stock): string
    {
        $stock->delete();

        return 'success';
    }

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

    public function updateStatus(Request $request, Stock $stock): string
    {
        $stock->update($request->all());

        return 'success';
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection<int,Stock>
     */
    public function search()
    {
        return Stock::where('status', '<>', 'Unfinished')
            ->selectRaw("concat_ws(' | ', ticker_symbol, company_name) as title, id")
            ->get();
    }
}
