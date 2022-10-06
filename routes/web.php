<?php

declare(strict_types=1);

use App\Http\Controllers\ChosenEpsController;
use App\Http\Controllers\FinancialMetricController;
use App\Http\Controllers\GrowthAssumptionController;
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
    'create', 'edit', 'index',
]);

Route::get('/chosen-growth-rates/{stockId}', [GrowthRateController::class, 'getChosen']);

Route::post('/calculate-growth-rates', [GrowthRateController::class, 'calculate']);

Route::get('/calculated-growth-rates/{stockId}', [GrowthRateController::class, 'show']);

Route::post('/calculate-growth-rate-with-chosen-years', [GrowthRateController::class, 'calculateForChosenYears']);

Route::post('growth_assumptions', [GrowthAssumptionController::class, 'store']);

Route::get('growth_assumptions', [GrowthAssumptionController::class, 'show']);

Route::post('chosen-eps', [ChosenEpsController::class, 'store']);

Route::get('chosen-eps/{stockId}', [ChosenEpsController::class, 'show']);

Route::get('/{all?}', function () {
    return view('app');
})->where(['all' => '.*']);
