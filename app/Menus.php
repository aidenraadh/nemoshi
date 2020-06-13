<?php
namespace App;

use Illuminate\Support\Facades\DB;

class Menus{
	public function getAllMenus(){
		return DB::select('SELECT * FROM menus');
	}

	public function getMenusForCart($menus_ids){
		return DB::select(
			'SELECT id, name, price FROM menus WHERE id IN('.implode(',', $menus_ids).')',
			[implode(',', $menus_ids)]
		);
	}	
}