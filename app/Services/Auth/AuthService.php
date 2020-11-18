<?php

namespace App\Services\Auth;

use App\Services\Auth\Handlers\RegistrationHandler;

class AuthService
{
    private $registrationHendler;

    public function __construct(RegistrationHandler $registrationHendler)
    {
        $this->registrationHendler = $registrationHendler;
    }

    public function registration($request)
    {
        return $this->registrationHendler->registration($request);
    }
}
