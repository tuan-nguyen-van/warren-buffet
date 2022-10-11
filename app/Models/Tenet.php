<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenet extends Model
{
    use HasFactory;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var string[] $guarded
     */
    protected $guarded = [];

    /** 
     * @var array<string,string> $tenetTypes 
     */
    public static $tenetTypes = [
        'business_tenet' => 'Business Tenet',
        'management_tenet' => 'Management Tenet',
        'financial_tenet' => 'Financial Tenet',
        'market_tenet' => 'Market Tenet',
    ];
}
