<?php

namespace App\Http\Controllers;

use App\Models\Tenet;

class TenetController extends Controller
{
    /** 
     * @return array<string,string>
     */
    public function tenetTypes()
    {
        return Tenet::$tenetTypes;
    }
}
