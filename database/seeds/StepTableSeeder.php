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
		
		$json = Storage::get('MockCaseNewVersion.js');
		$gamecase = json_decode($json);
		$steps = $gamecase[0]->steps;

		foreach ($steps as $step) {
			Step::create([
				'id' => $step->id,
				'text' => $step->description,
				'options_id' => $step->id,
				'direction' => $step->direction
			]);
		}
	}
}