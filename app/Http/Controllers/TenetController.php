<?php

namespace App\Http\Controllers;

use App\Models\Tenet;
use Illuminate\Http\Request;

class TenetController extends Controller
{
    /** 
     * @return array<string,string>
     */
    public function tenetTypes()
    {
        return Tenet::$tenetTypes;
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function store(Request $request)
    {
        Tenet::create($request->all());

        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function index()
    {
        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function update(Request $request, Tenet $tenet)
    {
        $tenet->update($request->all());

        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function destroy(Tenet $tenet)
    {
        $tenet->delete();

        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    /** @phpstan-ignore-next-line */
    private function returnTenetsCollection()
    {
        return collect(Tenet::all())->groupBy('type')->all();
    }
}
