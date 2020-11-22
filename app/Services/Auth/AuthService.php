<?php

namespace App\Services\Auth;

use App\Services\Auth\Handlers\RegistrationHandler;
use App\Services\Auth\Handlers\AutorizationHandler;

class AuthService
{
    private $registrationHendler;
    private $autorizationHandler;

    public function __construct(
        RegistrationHandler $registrationHendler,
        AutorizationHandler $autorizationHandler)
    {
        $this->registrationHendler = $registrationHendler;
        $this->autorizationHandler = $autorizationHandler;

    }
    public function registration($request)
    {
        return $this->registrationHendler->registration($request);
    }

    public function autorization($request)
    {
        return $this->autorizationHandler->autorization($request);
    }
}
