<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    /**
     * @property int id
     * @property string ticker_symbol
     * @property string company_name
     * @property string website
     * @property float current_market_price
     * @property string status
     * @property bool last_crawl
     * @property string vietstock_crawl_link
     */
    use HasFactory;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var string[] $guarded
     */
    protected $guarded = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function intrinsicValueCaculations()
    {
        return $this->hasOne(IntrinsicValueCalculation::class, 'stock_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function growthAssumptions()
    {
        return $this->hasMany(GrowthAssumption::class, 'stock_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function stockHasTenets()
    {
        return $this->hasMany(StockHasTenet::class, 'stock_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function financialMetrics()
    {
        return $this->hasMany(FinancialMetric::class, 'stock_id');
    }
}
