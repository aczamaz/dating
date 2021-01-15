<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $gender = (rand(0, 100) > 50) ? 'm' : 'f';
        $name = "";
        if($gender === 'f')
            $name = $this->faker->unique()->firstNameFemale;
        else
            $name = $this->faker->unique()->firstNameMale;
        return [
            'name' => $name,
            'email' => "$name@gmail.com",
            'email_verified_at' => now(),
            'password' => '123456', // password
            'remember_token' => Str::random(10),
            'age' => rand(19,29),
            'gender' => $gender,
            'avatar_dir' => 'avatar.png'
        ];
    }
}
