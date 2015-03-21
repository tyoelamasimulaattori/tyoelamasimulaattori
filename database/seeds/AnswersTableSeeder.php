<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Answer;

class AnswersTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    DB::table('answers')->delete();

    $json = Storage::get('MockCase.json');
    $case = json_decode($json);
    $steps = $case[0]->steps;

    foreach($steps as $step) {
      if(isset($step->options)) {
        $options = $step->options;
        foreach ($options as $answer) {
          Answer::create([
            'text' => $answer->name,
            'step_id' => $step->id,
            'next_step_id' => $answer->next_step_id,
          ]);
        }
      }
    }
  }
}
