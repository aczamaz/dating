<?php

namespace App\Http\Controllers;

use App\Http\Requests\DatingUsers;
use App\Services\Dating\DatingService;

class DatingController extends Controller
{
    public function __construct(DatingService $datingService)
    {
        $this->DatingService = $datingService;
    }
    public function getDatingUsers(DatingUsers $request)
    {
       return $this->DatingService->getDatingUsers($request);
    }
}
