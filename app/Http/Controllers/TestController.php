<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller{

	public function test(Request $request){
		Auth::guard('admins')->logout();
		dd(Storage::disk('public')->allFiles('menus'));
	}
}
