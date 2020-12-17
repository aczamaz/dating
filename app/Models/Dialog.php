<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dialog extends Model
{
    use HasFactory;

    protected $table = 'dialogs';

    protected $fillable = ['user_a', 'user_b'];

    public function getUserA()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_a');
    }

    public function getUserB()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_b');
    }
}
