<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $table = 'messages';

    protected $fillable = ['sender','recipient','message'];

    public function sender()
    {
        return $this->hasOne('App\Models\User','id','sender');
    }

    public function recipient()
    {
        return $this->hasOne('App\Models\User', 'id', 'recipient');
    }
}
