<?php
namespace App;

use Illuminate\Support\Facades\DB;

class Menus{
	public function getAllMenus(){
		return DB::select('SELECT * FROM menus');
	}
}