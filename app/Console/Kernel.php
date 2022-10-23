<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     *
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $crawlSchedules = [
            ['9:15', '9:19'],
            ['10:00', '10:04'],
            ['11:00', '11:04'],
            ['13:00', '13:04'],
            ['14:00', '14:04'],
            ['15:00', '15:04'],
        ];
        foreach ($crawlSchedules as $crawlSchedule) {
            $schedule->command('crawl:prices')->weekdays()
                ->everyMinute()->between($crawlSchedule[0], $crawlSchedule[1])
                ->appendOutputTo(storage_path('tasks/crawl-price.log'));
        }
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
