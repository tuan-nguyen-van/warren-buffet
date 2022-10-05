<?php

declare(strict_types=1);

use App\Http\Controllers\FinancialMetricController;
use App\Http\Controllers\GrowthRateController;
use App\Http\Controllers\StockController;
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

Route::resource('stocks', StockController::class)->except([
    'create', 'edit',
]);
Route::resource('financial-metrics', FinancialMetricController::class)->except([
    'create', 'edit',
]);

Route::post('/calculate-growth-rates', [GrowthRateController::class, 'calculate']);

Route::post('/calculate-growth-rate-with-chosen-years', [GrowthRateController::class, 'calculateForChosenYears']);

Route::get('/{name?}', function () {
    return view('app');
});
