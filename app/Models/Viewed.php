<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viewed extends Model
{
    protected $fillable = ['user_a','user_b'];
    protected $table = 'vieweds';
    use HasFactory;

    public function whoLooked()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_b');
    }

    public function whoWatch()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_a');
    }
}
