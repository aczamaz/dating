<?php

namespace App\Services\Auth\Handlers;

use Illuminate\Support\Facades\Storage;
use App\Models\User;

class RegistrationHendler
{
    private $user;

    public function __construct(User $userModel)
    {
        $this->user = $userModel;
    }
    private function saveAvatar($file)
    {
        $content = file_get_contents($file);
        $result = Storage::disk('local')->put('avatars/1',$content);
        return $result;
    }
    public function registration($request)
    {

        $this->user->name = $request->name;

    }
}
