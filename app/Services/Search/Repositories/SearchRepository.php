<?php

namespace App\Services\Search\Repositories;

use App\Services\Search\Filter\SearchFilter;

class SearchRepository
{
    public $searchFilter;

    public function __construct(SearchFilter $searchFilter)
    {
        $this->searchFilter = $searchFilter;
    }
    public function formatUsers($users)
    {
        foreach ($users as &$user)
        {
            $user->avatar_dir = "/storage/app/".$user->avatar_dir;
        }
        return $users;
    }
    public function searchUsers($request)
    {
        $users = $this->searchFilter->apply($request);
        $users = $this->formatUsers($users);
        if($users)
        {
            return response()->json(['success' => true, 'users' => $users], 200);
        }
        else
        {
            return response()->json(['success' => false, 'errors' => ['msg' => 'пользователей не найдено']], 400);
        }
    }
}
