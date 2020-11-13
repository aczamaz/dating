<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Message;

class MessageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->User = $user;
    }
    public function getUsers()
    {
        return $this->User->All();
    }

    public function run()
    {
        $users = $this->getUsers();
        for($i = 0; $i < 10; $i++)
        {
            foreach ($users as $sender)
            {
                foreach ($users as $recipient)
                {
                    if($sender->id != $recipient->id)
                    {
                        Message::factory()->state(
                            [
                                'sender'=>$sender->id,
                                'recipient' => $recipient->id,
                            ]
                        )->create();
                    }
                }
            }
        }
    }
}
