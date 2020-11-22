<?php

namespace App\Services\Auth\Handlers;

use App\Models\User;

class AutorizationHandler
{
    private $user;

    public function __construct(User $userModel)
    {
        $this->user = $userModel;
    }

    public function autorization($requst)
    {
        $user = $this->user->
                        where(
                                [
                                    'email' => $requst->email,
                                    'password' => $requst->password
                                ]
                            )
                        ->get();

        if($user->count() != 0)
            return['success' => true,'remember_token' => $user->remember_token];
        else
            return['success' => false ];
    }
}
