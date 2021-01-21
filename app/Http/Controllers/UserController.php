<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserByIdRequest;
use App\Http\Requests\UserByToken;
use App\Services\User\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $userService;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    public function getUserByToken(UserByToken $request)
    {
        $token = $request->input('token');
        return $this->userService->getUserByToken($token);
    }
    public function getUserById(UserByIdRequest $userByIdRequest)
    {
        return $this->userService->getUserById($userByIdRequest);
    }
}
