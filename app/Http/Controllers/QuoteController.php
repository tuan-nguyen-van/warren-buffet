<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    /**
     * @return \Illuminate\Database\Eloquent\Collection<int,Quote>
     */
    public function store(Request $request)
    {
        Quote::create($request->all());

        return Quote::all();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection<int,Quote>
     */
    public function index(Request $request)
    {
        return Quote::all();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection<int,Quote>
     */
    public function update(Request $request, Quote $quote)
    {
        $quote->update($request->all());

        return Quote::all();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection<int,Quote>
     */
    public function destroy(Quote $quote)
    {
        $quote->delete();

        return Quote::all();
    }
}
