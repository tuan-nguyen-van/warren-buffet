<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Tuan Nguyen',
            'email' => 'tuan.nv.vina@gmail.com',
            'password' => '$2y$10$iBxVZuqMfwcN/KktPdvYZuW4CR8vi7FUzz1930VTTvIMuVArdu/rO',
            'role' => 'Admin',
        ]);

        User::factory()->create([
            'name' => 'Guest',
            'email' => 'guest@gmail.com',
            'password' => '$2y$10$lCudDF9AJZcOxvHeNGrwDuuW.Kx885LNj1T8TCOfvu61.MGfVNZP2', // Password!@#
            'role' => 'Guest',
        ]);
    }
}
