<?php

namespace Database\Factories;

use App\Models\Dialog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DialogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Dialog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_a' => rand(1, 10),
            'user_b' => rand(1, 10),
        ];
    }
}
