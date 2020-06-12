<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->insert([
            'name' => Str::random(15),

            'password' => Hash::make('password'),
        ]);
    }
}

