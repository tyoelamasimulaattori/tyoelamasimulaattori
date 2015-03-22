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

		$json = Storage::get("MockCase.json");
		$gamecase = json_decode($json);
		foreach ($gamecase as $object) {
			GameCase::create([
				'id' => $object->id,
				'name' => $object->name,
				'image' => $object->image,
				'perspective_id' => $object->perspective_id,
				'text' => $object->description
			]);
		}
	}
}
