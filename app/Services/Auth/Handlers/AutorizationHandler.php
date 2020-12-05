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
        $users = $this->user->
                        where(
                                [
                                    'email' => $requst->email,
                                    'password' => $requst->password
                                ]
                            )
                        ->get();
        if($users->count())
            return response()->json(['success' => true,'remember_token' => $users[0]->remember_token],200);
        else
            return response()->json(['success' => false,'errors'=>['email'=>['неверные данные'],'password'=> ['неверные данные']]],400);
    }
}
