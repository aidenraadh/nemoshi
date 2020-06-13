<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Menus;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MenusController extends Controller
{
    public function getMenus(Menus $Menus){

    	return view('menus', [
    		'AppURLs' => [
    			'domain' => config('app.url'),
    			'images' => asset('images').'/',
    			'icons' => asset('images/icons').'/',
                'menusImg' => asset('storage/menus').'/',
                'toggleAddMenuURL' => config('app.url').'menus/toggleadd',
    		],
    		'menus' => $Menus->getAllMenus(),
            'orderedMenus' => session('cart', null),
            'menusImgPath' => Storage::disk('public')->allFiles('menus')
    	]);
    }

    public function toggleAddMenu(Request $request){
        $cart = session('cart', []);

        switch($request->action){
            case 'add':
                if(array_key_exists($request->menu_id, $cart)){
                    ++$cart[$request->menu_id];
                }
                else{
                    $cart[$request->menu_id] = 1;
                } break;
            case 'remove':
                if(array_key_exists($request->menu_id, $cart)){
                    if( ($cart[$request->menu_id] -1) !== 0){
                        --$cart[$request->menu_id];
                    }
                    else{
                        unset($cart[$request->menu_id]);
                    }
                }
        }

        session(['cart' => $cart]);

        return true;
    }

    public function getCart(Request $request, Menus $Menus){
        $cart = $request->session()->get('cart', null);
        // If the cart isn't empty, validate the menu IDs inside
        // the cart
        if($cart){
            // Get Menu IDs
            $menus_ids = array_keys($cart);

            $v = Validator::make(['menus_ids' => $menus_ids], [
                'menus_ids' => ['bail', 'array'],
                'menus_ids.*' => ['bail', 'integer', 'exists:menus,id']
            ], [
                'integer' => 'Menu ID is not integer',
                'exists' => "Menu doesn't exists",
            ]);

            if($v->fails()){
                $errors = $v->errors()->all();
                foreach($errors as $error){
                    // Abort App if the menu ID is not an integer,
                    // otherwise keep continue
                    if($error === 'Menu ID is not integer'){
                        abort(403);
                    }
                }
            }
        }


        return view('cart', [
            'AppURLs' => [
                'domain' => config('app.url'),
                'images' => asset('images').'/',
                'menusImg' => asset('storage/menus').'/',
                'icons' => asset('images/icons').'/',
                'toggleAddMenuURL' => config('app.url').'menus/toggleadd',
            ],
            'orderedMenus' => ($cart ? $Menus->getMenusForCart($menus_ids) : null),
            'quantity' => $cart,
            'menusImgPath' => Storage::disk('public')->allFiles('menus'),
        ]);
    }    
}
