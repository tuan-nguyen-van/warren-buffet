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
        Schema::table('growth_assumptions', function (Blueprint $table) {
            $table->dropColumn('assumed_growth_rate');
            $table->decimal('next_10_years', 5, 2)->change();
            $table->decimal('next_10_to_20_years', 5, 2)->change();
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
