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
        Schema::create('retained_earnings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stock_id')
                ->constrained('stocks')
                ->onUpdate('restrict')
                ->onDelete('cascade');
            $table->year('year_from');
            $table->year('year_to');
            $table->unsignedInteger('value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('retained_earnings');
    }
};
