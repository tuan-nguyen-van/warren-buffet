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
        Schema::create('financial_metrics', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stock_id')
                ->constrained('stocks')
                ->onUpdate('restrict')
                ->onDelete('cascade');
            $table->year('year');
            $table->integer('EPS');
            $table->unsignedInteger('money_dividend')->nullable();
            $table->unsignedDecimal('stock_dividend', 6, 3)->nullable();
            $table->decimal('profit', 10, 3);
            $table->decimal('ROEA', 6, 3)->nullable();
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
        Schema::dropIfExists('financial_metrics');
    }
};
