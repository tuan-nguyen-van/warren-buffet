<?php

namespace App\Service;

use App\Models\Stock;
use Exception;

class VietstockCrawlPrice
{
    public function crawlPrice(Stock $stock): void
    {
        $context = stream_context_create(
            [
                'http' => [
                    'header' => 'User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
                ],
            ]
        );
        try {
            $html = file_get_contents($stock->vietstock_crawl_link, false, $context);
        } catch (\ErrorException $e) {
            throw new Exception("Cannot crawl price for stock with id: $stock->id");
        }
        if ($html && !preg_match('/<span class="txt-[a-z]+\sprice">[0-9,]+<\/span>/', $html, $matches)) {
            throw new Exception("Cannot get the price from the link for stock with id: $stock->id");
        }

        if (isset($matches)) {
            preg_match('/[0-9,]+/', $matches[0], $price);
            $priceToNumber = str_replace(',', '.', $price[0]);
            $stock->update(['current_market_price' => ((float) $priceToNumber) * 1000]);
        }
    }
}
