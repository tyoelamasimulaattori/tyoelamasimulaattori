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
		$options = $steps[0]->options;

		foreach ($steps as $step) {
			Step::create(array(
				'id' => $step->id,
				'text' => $step->description,
				'options_id' => $options->id,
				'gamecase_id' => $gamecase->id,
				'direction' => $step->direction
			));
		}
	}
}
