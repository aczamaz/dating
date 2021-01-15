<?php

namespace Database\Seeders;

use App\Models\Dialog;
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
    public function __construct(User $user,Dialog $dialog)
    {
        $this->User = $user;
        $this->Dialog = $dialog;
    }
    public function getUsers()
    {
        return $this->User->All();
    }

    public function getDialog()
    {
        return $this->Dialog->All();
    }
    public function run()
    {
        $users = $this->getUsers();
        $dialogs = $this->getDialog();

        foreach($dialogs as $dialog)
        {
            for($i = 0; $i < 10; $i++)
            {
                $sender = 0;
                $recipient = 0;
                if($i % 2 == 0)
                {
                    $sender = $dialog->user_a;
                    $recipient = $dialog->user_b;
                }
                else {
                    $sender = $dialog->user_b;
                    $recipient = $dialog->user_a;
                }
                Message::factory()->state(
                    [
                        'sender'=> $sender,
                        'recipient' => $recipient,
                        'dialog_id' => $dialog->id
                    ]
                )->create();
            }
        }
    }
}
