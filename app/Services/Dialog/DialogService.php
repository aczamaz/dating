<?php

namespace App\Services\Dialog;

use App\Services\Dialog\Handlers\DialogsHandler;
use App\Services\Dialog\Repositories\DialogsRepository;

class DialogService
{
    private $dialogRepository;
    private $dialogHandler;
    public function __construct(
        DialogsRepository $dialogRepository,
        DialogsHandler $dialogHandler
    )
    {
        $this->dialogRepository = $dialogRepository;
        $this->dialogHandler = $dialogHandler;
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
        return $this->dialogHandler->saveMessage($request);
    }
}
