<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\AutorizantionRequest;
use App\Services\Auth\AuthService;

class AuthController extends Controller
{
    private $authService;
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function autorization(AutorizantionRequest $request)
    {
        $result = $this->authService->autorization($request);

        return $result;
    }
    public function registration(RegistrationRequest $request)
    {
        $result = $this->authService->registration($request);

        return response()->json($result);
    }
}
