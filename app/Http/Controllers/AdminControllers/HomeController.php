<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admins');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index()
    {
        return view(
            'admin_views.home',
            [
                'AppURLs' => [
                    'domain' => config('app.url'),
                    'images' => asset('images').'/',
                    'icons' => asset('images/icons').'/',
                ],
            ]
        );
    }
}
