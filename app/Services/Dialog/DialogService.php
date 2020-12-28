<?php

namespace App\Services\Dialog;

use App\Services\Dialog\Repositories\DialogsRepository;

class DialogService
{
    private $dialogRepository;
    public function __construct(DialogsRepository $dialogRepository)
    {
        $this->dialogRepository = $dialogRepository;
    }
    public function getDialogs($token)
    {
        return $this->dialogRepository->getDialogs($token);
    }
    public function getDialog($request)
    {
        return $this->dialogRepository->getDialog($request);
    }
}
