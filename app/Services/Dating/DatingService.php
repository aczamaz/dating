<?php

namespace App\Services\Dating;

use App\Services\Dating\Repositories\DatingRepository;

class DatingService
{
    public function __construct(DatingRepository $datingRepository)
    {
        $this->datingRepository = $datingRepository;
    }
    public function getDatingUsers($request)
    {
        return $this->datingRepository->getDatingUsers($request);
    }
}
