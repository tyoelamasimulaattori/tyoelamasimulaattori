<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Step;

class StepTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		DB::table('steps')->delete();

		$json = Storage::get('MockCase.json');
		$gamecase = json_decode($json);
		$gamecase_id = $gamecase[0]->id;
		$steps = $gamecase[0]->steps;

		foreach ($steps as $step) {
			Step::create([
				'id' => $step->id,
				'image' => $step->image,
				'description' => $step->description,
				'gamecase_id' => $gamecase_id
			]);
		}
	}
}
