<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchUsersRequest;
use App\Services\Search\SearchService;

class SearchController extends Controller
{
    private $searchService;

    public function __construct(SearchService $searchService)
    {
        $this->searchService = $searchService;
    }
    public function searchUsers(SearchUsersRequest $searchUsersRequest)
    {
        return $this->searchService->searchUsers($searchUsersRequest);
    }
}
