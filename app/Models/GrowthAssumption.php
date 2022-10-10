<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrowthAssumption extends Model
{
    use HasFactory;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var string[] $guarded
     */
    protected $guarded = [];

    /**
     * @property string next_10_years
     * @property string next_10_to_20_years
     */
}
