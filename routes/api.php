<?php
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/registration', 'App\Http\Controllers\Auth\RegistrationController@registration');
Route::post('/autorization', 'App\Http\Controllers\Auth\AutorizationController@autorization');
Route::post('/getUserByToken', 'App\Http\Controllers\User\UserController@getUserByToken');
