<?php

declare(strict_types=1);

use App\Http\Controllers\ChosenEpsController;
use App\Http\Controllers\DiscountRateController;
use App\Http\Controllers\FinancialMetricController;
use App\Http\Controllers\GrowthAssumptionController;
use App\Http\Controllers\GrowthRateController;
use App\Http\Controllers\IntrinsicValueCalculationController;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\StockHasTenetController;
use App\Http\Controllers\TenetController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/crawl', function () {
//     $context = stream_context_create(
//         [
//             'http' => [
//                 'header' => 'User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
//             ],
//         ]
//     );

//     $html = file_get_contents('https://finance.vietstock.vn/VNM-ctcp-sua-viet-nam.htm', false, $context);
//     $remainedStringWithPrice = stristr($html, '<span class="txt-green price">') ?: (stristr($html, '<span class="txt-red price">') ?: stristr($html, '<span class="txt-orange price">'));
//     $firstLessThan = strpos($remainedStringWithPrice, '>');
//     $secondMoreThan = strpos($remainedStringWithPrice, '<', $firstLessThan);
//     $vietnamesePrice = substr($remainedStringWithPrice, $firstLessThan + 1, $secondMoreThan - $firstLessThan - 2); // 15,95
//     $priceToNumber = str_replace(',', '.', $vietnamesePrice);

//     return $priceToNumber;
// });

Route::resource('stocks', StockController::class)->except([
    'create', 'edit',
]);

Route::patch('stocks/status/{stock}', [StockController::class, 'updateStatus']);

Route::get('stocks-for-home', [StockController::class, 'indexHome']);

Route::resource('financial-metrics', FinancialMetricController::class)->except([
    'create', 'edit', 'index',
]);

Route::get('/chosen-growth-rates/{stockId}', [GrowthRateController::class, 'getChosen']);

Route::post('/calculate-growth-rates', [GrowthRateController::class, 'calculate']);

Route::get('/calculated-growth-rates/{stockId}', [GrowthRateController::class, 'show']);

Route::post('/calculate-growth-rate-with-chosen-years', [GrowthRateController::class, 'calculateForChosenYears']);

Route::post('/growth_assumptions', [GrowthAssumptionController::class, 'store']);

Route::get('/growth_assumptions', [GrowthAssumptionController::class, 'show']);

Route::post('/chosen-eps', [ChosenEpsController::class, 'store']);

Route::get('/chosen-eps/{stockId}', [ChosenEpsController::class, 'show']);

Route::post('/store-discount-rate', [DiscountRateController::class, 'store']);

Route::get('/get-discount-rate', [DiscountRateController::class, 'show']);

Route::post('/calculate-intrinsic-value', [IntrinsicValueCalculationController::class, 'store']);

Route::get('/intrinsic-value-calculation/{stockId}', [IntrinsicValueCalculationController::class, 'show']);

Route::get('/tenet-types', [TenetController::class, 'tenetTypes']);

Route::post('/tenets', [TenetController::class, 'store']);

Route::get('/tenets', [TenetController::class, 'index']);

Route::put('/tenets/{tenet}', [TenetController::class, 'update']);

Route::delete('/tenets/{tenet}', [TenetController::class, 'destroy']);

Route::post('/stock-has-tenets', [StockHasTenetController::class, 'store']);

Route::get('/stock-has-tenets/{stockId}', [StockHasTenetController::class, 'show']);

Route::post('/stock-has-tenets/note', [StockHasTenetController::class, 'storeNote']);

Route::post('/quotes', [QuoteController::class, 'store']);

Route::get('/quotes', [QuoteController::class, 'index']);

Route::put('/quotes/{quote}', [QuoteController::class, 'update']);

Route::delete('/quotes/{quote}', [QuoteController::class, 'destroy']);

Route::get('/{all?}', function () {
    return view('app');
})->where(['all' => '.*']);
