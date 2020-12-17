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
                                'dialog_id' => $dialog->id
                            ]
                        )->create();
                    }
                }
            }
        }
    }
}
