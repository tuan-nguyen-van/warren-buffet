<?php

namespace App\Http\Controllers;

use App\Models\DiscountRate;
use Illuminate\Http\Request;

class DiscountRateController extends Controller
{
    public function store(Request $request): DiscountRate
    {
        $first = DiscountRate::first();
        if ($first) {
            $first->delete();
        }

        return DiscountRate::create([
            'value' => $request->value,
        ]);
    }

    public function show(): DiscountRate
    {
        return DiscountRate::first();
    }
}
