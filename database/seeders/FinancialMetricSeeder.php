<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FinancialMetricSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('financial_metrics')->insert([
            [
                'name' => 'EPS',
                'measurement_unit' => 'VND',
            ],
            [
                'name' => 'Money Dividend',
                'measurement_unit' => 'VND',
            ],
            [
                'name' => 'Stock Dividend',
                'measurement_unit' => '%',
            ],
            [
                'name' => 'Profit',
                'measurement_unit' => 'Billion VND',
            ],
            [
                'name' => 'ROEA',
                'measurement_unit' => '%',
            ],
            [
                'name' => 'Debt to Equity',
                'measurement_unit' => 'Ratio',
            ],
        ]);
    }
}
