<?php

namespace App\Services\Search\Filter;

use App\Models\User;

class SearchFilter
{
    private $user;
    private $paramsToMethods = [
        'name' => 'setName',
        'age-from' => 'setAgeFrom',
        'age-to' => 'setAgeTo',
        'gender' => 'setGender'
    ];
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function setName($param)
    {
        return ['name','=', $param];
    }
    public function setAgeFrom($param)
    {
        return ['age', '>=', $param];
    }
    public function setAgeTo($param)
    {
        return ['age', '<=', $param];
    }
    public function setGender($param)
    {
        return ['gender', '=', $param];
    }
    public function apply($params)
    {
        $filter = [];
        foreach ($this->paramsToMethods as $param => $method)
        {
            if ($params[$param])
            {
                $filter[] = $this->$method($params[$param]);
            }
        };
        return $this->user->where($filter)->get();
    }
}
