<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Auth;

class AdminPanelController extends Controller
{
    public function index()
    {
        return view(
            'admin_views.home', [
                'AppURLs' => [
                    'domain' => config('app.url'),
                    'images' => asset('images').'/',
                    'icons' => asset('images/icons').'/',
                    'logout' => route('admin/logout').'/',
                ],
        ]);
    }
}
