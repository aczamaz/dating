<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Dialog;

class DialogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++)
            for ($j = $i; $j <= 10; $j++)
                if($i != $j)
                    Dialog::factory()->state(
                        [
                            'user_a' => $i,
                            'user_b' => $j,
                        ]
                    )->create();
    }
}
