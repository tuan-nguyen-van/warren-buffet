<?php

declare(strict_types=1);

use App\Http\Controllers\AuthController;
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
// Route::get('/password-generator', function() {
//     return (\Illuminate\Support\Facades\Hash::make(''));
// });

Route::get('/login', function () {
    return view('login', [
        'previousUrl' => url()->previous(),
    ]);
})->name('login');

Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth', 'auth.session', 'constrainGuest'])->group(function () {
    Route::apiResource('stocks', StockController::class);

    Route::get('/stocks-search', [StockController::class, 'search']);

    Route::patch('/stocks/status/{stock}', [StockController::class, 'updateStatus']);

    Route::get('/stocks-for-home', [StockController::class, 'indexHome']);

    Route::resource('/financial-metrics', FinancialMetricController::class)->except([
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

    Route::get('/current-user', [AuthController::class, 'show']);

    Route::get('/logout', [AuthController::class, 'logout']);

    Route::get('/{all?}', function () {
        return view('app');
    })->where(['all' => '.*']);
});
