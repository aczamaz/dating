<?php

namespace App\Services\User\Repositories;

use App\Models\User;
class UserRepository
{
    private $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function getUserDataFormated($users)
    {
        $user = $users[0];
        $user->avatar_dir = '/storage/app/' . $user->avatar_dir;
        return[
            'id'=>$user->id,
            'token'=>$user->remember_token,
            'avatar_dir'=>$user->avatar_dir,
            'name'=>$user->name,
            'age'=>$user->age,
            'gender'=>$user->gender
        ];
    }
    public function getUserByToken($token)
    {
        $users = $this->user->where('remember_token', $token)->get();
        if($users->count())
        {
            return response()->json(['success' => true, 'userData' => $this->getUserDataFormated($users)], 200);
        }
        else
        {
            return response()->json(['success' => false, 'errors' => ['msg' => 'пользователь не найден']], 400);
        }
    }
    public function getIdByToken($token)
    {
        if(!$token)
            return false;
        $user = $this->user->where('remember_token', $token)->get();
        if($user->count())
            return $user[0]->id;
        return false;
    }
}
