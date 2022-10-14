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
        Schema::create('stock_has_tenets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenet_id')
                ->constrained('tenets')
                ->onUpdate('restrict')
                ->onDelete('cascade');
            $table->foreignId('stock_id')
                ->constrained('stocks')
                ->onUpdate('restrict')
                ->onDelete('cascade');
            $table->tinyInteger('value')->default(0);
            $table->string('note', 1000)->nullable();
            $table->timestamps();
            $table->unique(['stock_id', 'tenet_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock_has_tenets');
    }
};
