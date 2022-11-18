<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('growth_rates', function (Blueprint $table) {
            $table->dropForeign('growth_rates_stock_id_foreign');
            $table->dropUnique('growth_rates_stock_id_year_from_year_to_unique');
            $table->unique(['stock_id', 'year_from', 'year_to', 'chosen']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
};
