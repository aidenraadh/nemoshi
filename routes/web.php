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
    return view('landing', [
    	'AppURLs' => [
    		'domain' => config('app.url'),
    		'images' => asset('images').'/',
    		'icons' => asset('images/icons').'/',
    	],
    ]);
});

Route::get('about', function () {
    return view('about', [
    	'AppURLs' => [
    		'domain' => config('app.url'),
    		'images' => asset('images').'/',
    		'icons' => asset('images/icons').'/',
    	],
    ]);
});

Route::get('/test', 'TestController@test');

Route::get('/menus', 'MenusController@getMenus');
Route::post('/menus/toggleadd', 'MenusController@toggleAddMenu');

Route::get('/cart', 'MenusController@getCart');

/*Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');*/

Route::prefix('admin')->group(function () {
	Route::get('home', 'AdminControllers\AdminPanelController@index')
	->middleware('auth:admins')->name('admin/home');

	Route::get('login', 'AdminControllers\Auth\LoginController@showLoginForm')->name('admin/login');
	Route::post('login', 'AdminControllers\Auth\LoginController@login');
	Route::post('logout', 'AdminControllers\Auth\LoginController@logout')->name('admin/logout');

	Route::get('password/confirm', 'AdminControllers\Auth\ConfirmPasswordController@showConfirmForm');
	Route::post('password/confirm', 'AdminControllers\Auth\ConfirmPasswordController@confirm');

	Route::post('password/email', 'AdminControllers\Auth\ForgotPasswordController@sendResetLinkEmail')
	->name('admin/password.email');
	Route::get('password/reset', 'AdminControllers\Auth\ForgotPasswordController@showLinkRequestForm')
	->name('admin/password.request');
	

	Route::post('password/reset', 'AdminControllers\Auth\ResetPasswordController@reset')
	->name('admin/password.update');
	Route::get('password/reset/{token}', 'AdminControllers\Auth\ResetPasswordController@showResetForm')
	->name('admin/password.reset');

	Route::get('register', 'AdminControllers\Auth\RegisterController@showRegistrationForm')->name('admin/register');
	Route::post('register', 'AdminControllers\Auth\RegisterController@register');		
});