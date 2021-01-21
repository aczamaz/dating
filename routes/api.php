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
Route::post('/registration', 'App\Http\Controllers\AuthController@registration');
Route::post('/autorization', 'App\Http\Controllers\AuthController@autorization');

Route::post('/getUserByToken', 'App\Http\Controllers\UserController@getUserByToken');
Route::post('/getUserById', 'App\Http\Controllers\UserController@getUserById');

Route::post('/getDialogs', 'App\Http\Controllers\DialogController@getDialogs');
Route::post('/getDialog', 'App\Http\Controllers\DialogController@getDialog');
Route::post('/sendMessage','App\Http\Controllers\DialogController@sendMessage');
Route::post('/getDatingUsers', 'App\Http\Controllers\DatingController@getDatingUsers');
Route::post('/searchUsers', 'App\Http\Controllers\SearchController@searchUsers');
