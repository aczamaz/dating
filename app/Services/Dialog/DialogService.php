<?php

namespace App\Services\Dialog;

use App\Services\Dialog\Handlers\DialogsHandler;
use App\Services\Dialog\Repositories\DialogsRepository;

class DialogService
{
    private $dialogRepository;
    public function __construct(
        DialogsRepository $dialogRepository,
        DialogsHandler $dialogHandler
    )
    {
        $this->DialogRepository = $dialogRepository;
        $this->DialogHandler = $dialogHandler;
    }
    public function getDialogs($token)
    {
        return $this->dialogRepository->getDialogs($token);
    }
    public function getDialog($request)
    {
        return $this->dialogRepository->getDialog($request);
    }
    public function saveMessage($request)
    {
        $this->dialogHandler->saveMessage($request);
    }
}
