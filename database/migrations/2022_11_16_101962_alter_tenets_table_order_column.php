<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class() extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $tenetTypes = DB::table('tenets')->get()->groupBy('type');

        foreach ($tenetTypes as $tenetType) {
            for ($i = 0; $i < $tenetType->count(); ++$i) {
                DB::table('tenets')
                    ->where('id', $tenetType[$i]->id)
                    ->update(['order' => $i + 1]);
            }
        }
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
