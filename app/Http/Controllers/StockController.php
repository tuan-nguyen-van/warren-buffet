<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use App\Models\Tenet;
use App\Models\User;
use App\Service\VietstockCrawlPrice;
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
        $stocksQuery = Stock::has('intrinsicValueCaculations')
            ->where('status', 'Followed');

        if (User::isGuest()) {
            $stocksQuery->whereIn('id', [37, 49, 58, 63, 64]);
        }

        $stocks = $stocksQuery->with([
            'intrinsicValueCaculations',
            'growthAssumptions',
            'stockHasTenets' => function ($query) {
                $query->where('value', 1);
            },
            'financialMetrics' => function ($query) {
                $query->orderBy('year', 'desc');
            },
        ])->get();

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
        $query = DB::table('stocks');
        if (User::isGuest()) {
            $query->whereIn('id', [37, 49, 58, 63, 64]);
        }

        return $query->orderByRaw("FIELD(status, 'Followed', 'Unfollowed', 'Unfinished')")->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request): int
    {
        $validated = $this->validateStockInputs($request, 'store');
        $stock = Stock::create($validated);

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
     *
     * @return string
     */
    public function update(Request $request, Stock $stock)
    {
        $validated = $this->validateStockInputs($request, 'update');
        $stock->update($validated);

        return 'success';
    }

    public function destroy(Stock $stock): string
    {
        $stock->delete();

        return 'success';
    }

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return array<string,string>
     */
    public function validateStockInputs(&$request, string $method)
    {
        $vietnameseSignedChars = 'àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ';
        $companyRegex = "/^[a-zA-Z$vietnameseSignedChars]{1,20}(\s+[1-9a-zA-Z$vietnameseSignedChars\(\)\.\/\\\&\-\+\:\,]{1,20})+$/";
        $needUnique = $method === 'store' ? '|unique:stocks' : '';
        $websiteRegex = "/^(http(s)?:\/\/)?(www.)?[a-zA-z0-9._\-]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9\/.]*)$/";
        $vietstockCrawlLinkRegex = "/^(https:\/\/)?finance.vietstock.vn\/[A-Za-z0-9-:\/\\()\&]{1,256}.htm$/";

        return $request->validate([
            'ticker_symbol' => "required$needUnique|min:3|max:4|regex:/^[A-Z1-9]{3,4}$/",
            'company_name' => "required$needUnique|min:5|max:255|regex:$companyRegex",
            'website' => "required$needUnique|min:10|max:50|regex:$websiteRegex",
            'vietstock_crawl_link' => "required|min:10|max:100|regex:$vietstockCrawlLinkRegex",
            'current_year_stock_dividend' => 'min:0',
            'stock_note' => 'min:0|max:500',
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
        $query = Stock::where('status', '<>', 'Unfinished')
            ->selectRaw("concat_ws(' | ', ticker_symbol, company_name) as title, id");
        if (User::isGuest()) {
            $query->whereIn('id', [37, 49, 58, 63, 64]);
        }

        return $query->get();
    }

    public function refreshMarketPrice(Stock $stock, VietstockCrawlPrice $vietstockCrawlPrice): float
    {
        $vietstockCrawlPrice->crawlPrice($stock);

        return Stock::where('id', $stock->id)->first()->current_market_price;
    }
}
