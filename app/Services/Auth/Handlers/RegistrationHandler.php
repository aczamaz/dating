<?php

namespace App\Services\Auth\Handlers;

use Illuminate\Support\Facades\Storage;
use App\Models\User;
use Illuminate\Support\Str;

class RegistrationHandler
{
    private $user;

    public function __construct(User $userModel)
    {
        $this->user = $userModel;
    }
    private function getNameForAvatar($orifinalName)
    {
        $fileNameArray = explode(".", $orifinalName);
        return Str::random() . "." . end($fileNameArray);
    }
    private function saveAvatar($file)
    {
        $fileName = $file->getClientOriginalName();
        $newName = $this->getNameForAvatar($fileName);
        $result = $file->storeAs('avatars',$newName,'local');
        return $result;
    }
    public function registration($request)
    {
        $pathFile = $this->saveAvatar($request->srcImage);
        $token = Str::random(10);
        $this->user->name = $request->name;
        $this->user->email = $request->email;
        $this->user->password = $request->password;
        $this->user->age = $request->age;
        $this->user->gender = $request->gender;
        $this->user->avatar_dir = $pathFile;
        $this->user->remember_token = $token;
        if($this->user->save())
        {
            $this->user->avatar_dir =  '/storage/app/'. $this->user->avatar_dir;
            return ['success' => true,'userData'=>$this->user];
        }
        return ['success' => false];

    }
}
