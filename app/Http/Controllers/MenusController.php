<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Menus;
use Illuminate\Support\Facades\Storage;

class MenusController extends Controller
{
    public function getMenus(Menus $Menus){

    	return view('menus', [
    		'AppURLs' => json_encode([
    			'domain' => config('app.url'),
    			'images' => asset('images').'/',
    			'icons' => asset('images/icons').'/',
                'menusImg' => asset('storage/menus').'/',
                'addOrRemoveMenu' => config('app.url').'menus/toggle',
    		], true),
    		'Menus' => json_encode($Menus->getAllMenus(), true),
            'MenusImgPath' => json_encode(Storage::disk('public')->allFiles('menus'), true)
    	]);
    }

    public function addOrRemoveMenu(Request $request){
        $cart = session('cart', []);

        switch($request->$action){
            case 'add':
                if(array_key_exists($request->$menu_id, $cart)){
                    ++$cart[$request->$menu_id];
                }
                else{
                    $cart[$menu_id] = 1;
                } break;
            case 'remove':
                if(array_key_exists($request->$menu_id, $cart)){
                    if( ($cart[$request->$menu_id] -1) !== 0){
                        --$cart[$request->$menu_id];
                    }
                    else{
                        unset($cart[$request->$menu_id]);
                    }
                }
            default: ;          
        }

        session(['cart' => $cart]);
    }
}
