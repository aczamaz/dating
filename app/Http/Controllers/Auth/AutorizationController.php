<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AutorizantionRequest;
use App\Services\Auth\AuthService;

class AutorizationController extends Controller
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
}
