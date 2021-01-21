<?php

namespace App\Services\Search;

use App\Services\Search\Repositories\SearchRepository;

class SearchService
{
    private $searchRepository;
    public function __construct(SearchRepository $searchRepository)
    {
        $this->searchRepository = $searchRepository;
    }
    public function searchUsers($request)
    {
        return $this->searchRepository->searchUsers($request);
    }
}
