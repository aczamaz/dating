<?php

namespace App\Services\Dating\Repositories;

use App\Models\User;
use App\Models\Viewed;
use App\Services\User\UserService;

class DatingRepository
{
    public function __construct(User $user, Viewed $viewed, UserService $userService)
    {
        $this->User = $user;
        $this->Viewed = $viewed;
        $this->UserService = $userService;
    }
    public function getDatingUsers($request)
    {
        $token = $request->input('token');

        $id = $this->UserService->getIdByToken($token);
        if (!$id)
            return response()->json(['success' => false, 'errors' => ['msg' => 'пользователь не найден']], 400);

        $wievedIdsCollection = $this->Viewed->where(['user_a'=>$id])->get();

        $wievedIds = [$id];
        foreach ($wievedIdsCollection as $vieved)
        {
            $wievedIds[] = $vieved->user_b;
        }
        $result = $this->User->whereNotIn('id',$wievedIds)->get();
        foreach ($result as $user)
        {
            $user->avatar_dir = '/storage/'. $user->avatar_dir;
        }
        if ($result->count())
            return response()->json(['success' => true, 'usersData' => $result], 200);
        else
            return response()->json(['success' => false, 'errors' => ['msg' => 'пользователи не найден']], 200);
    }
}
