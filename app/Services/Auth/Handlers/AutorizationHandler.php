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
        {
            $users[0]->avatar_dir = '/storage/app/' . $users[0]->avatar_dir;
            return response()->json(['success' => true,'userData'=> $users[0]],200);
        }
        else
        {
            return response()->json(['success' => false,'errors'=>['email'=>['неверные данные'],'password'=> ['неверные данные']]],400);
        }
    }
}
