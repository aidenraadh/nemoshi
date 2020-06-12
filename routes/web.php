<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome', [
    	'AppURLs' => json_encode([
    		'domain' => config('app.url'),
    		'images' => asset('images').'/',
    		'icons' => asset('images/icons').'/',
    	], true),
    ]);
});

Auth::routes();

Route::get('/test', 'TestController@test');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/menus', 'MenusController@getMenus');
Route::post('/menus/toggle', 'MenusController@getMenus');

