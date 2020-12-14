<?php

namespace App\Services\User;

use App\Services\User\Repositories\UserRepository;

class UserService
{
    private $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    public function getUserByToken($token)
    {
        return $this->userRepository->getUserByToken($token);
    }
}