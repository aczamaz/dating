<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\Services\Auth\AuthService;
class RegistrationController extends Controller
{
    private $authService;
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function registration(RegistrationRequest $request)
    {
        $result = $this->authService->registration($request);

        return response()->json($result);
    }
}
