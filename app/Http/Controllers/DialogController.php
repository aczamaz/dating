<?php

namespace App\Http\Controllers;

use App\Http\Requests\DialogsRequest;
use App\Services\Dialog\DialogService;

class DialogController extends Controller
{
    public function __construct(DialogService $dialogService)
    {
        $this->dialogService = $dialogService;
    }
    public function getDialogs(DialogsRequest $dialogsRequest)
    {
        return $this->dialogService->getDialogs($dialogsRequest->input('token'));
    }
}
