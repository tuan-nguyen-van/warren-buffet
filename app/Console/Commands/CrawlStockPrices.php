<?php

namespace App\Console\Commands;

use App\Models\Stock;
use App\Service\VietstockCrawlPrice;
use Illuminate\Console\Command;

class CrawlStockPrices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crawl:prices';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Crawl Prices then save to database with Vietstock links';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle(VietstockCrawlPrice $vietstockCrawlPrice)
    {
        /** @var \Illuminate\Database\Eloquent\Collection<int,Stock> $allFinishedStocks */
        $allFinishedStocks = Stock::where('status', '<>', 'Unfinished')->get();

        /** @var ?Stock $lastCrawlStock */
        $lastCrawlStock = Stock::where('status', '<>', 'Unfinished')
            ->where('last_crawl', 1)->first();

        $numberOfStocksWillBeCrawled = (int) ceil($allFinishedStocks->count() / 4);

        if ($lastCrawlStock) {
            /** @var \Illuminate\Database\Eloquent\Collection<int,Stock> $crawledStocks */
            $crawledStocks = Stock::where('status', '<>', 'Unfinished')
                ->where('id', '>', $lastCrawlStock->id)
                ->limit($numberOfStocksWillBeCrawled)
                ->get();
            if ($crawledStocks->count() < $numberOfStocksWillBeCrawled) {
                /** @var \Illuminate\Database\Eloquent\Collection<int,Stock> $remainedStocks */
                $remainedStocks = Stock::where('status', '<>', 'Unfinished')
                    ->limit($numberOfStocksWillBeCrawled - $crawledStocks->count())->get();

                $crawledStocks = $crawledStocks->concat($remainedStocks);
            }
        } else {
            $crawledStocks = Stock::where('status', '<>', 'Unfinished')
                ->limit($numberOfStocksWillBeCrawled)->get();
        }

        $error = false;
        foreach ($crawledStocks as $crawledStock) {
            try {
                $vietstockCrawlPrice->crawlPrice($crawledStock);
            } catch (\Exception $e) {
                $this->info($e->getMessage());
                $error = true;
            }
        }
        if (!$error) {
            $lastCrawlStock?->update(['last_crawl' => 0]);
            $crawledStocks[$crawledStocks->count() - 1]->update(['last_crawl' => 1]);
            $this->info("Crawl stock price was successful from id: {$crawledStocks[0]->id} to {$crawledStocks[count($crawledStocks) - 1]->id}");
        }
    }
}
