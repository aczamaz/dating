<?php

namespace App\Http\Controllers;

use App\Http\Requests\DialogsRequest;
use App\Http\Requests\DialogRequest;
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
    public function getDialog(DialogRequest $dialogRequest)
    {
        return $this->dialogService->getDialog($dialogRequest);
    }
}
