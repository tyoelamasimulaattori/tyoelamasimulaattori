<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Gamecase;

class GamecaseTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		DB::table('gamecases')->delete();
		
		$json = Storage::get("MockCaseNewVersion.js");
		$gamecase = json_decode($json);
		foreach ($gamecase as $object) {
			Gamecase::create([
				'name' => $object->name,
				'text' => $object->description
			]);
		}
	}
}
