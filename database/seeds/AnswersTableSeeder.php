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

    $json = Storage::get('MockCaseNewVersion.js');
    $case = json_decode($json);
    $steps = $case[0]->steps;

    foreach($steps as $step) {
      $options = $steps[0]->options;
      foreach ($options as $answer) {
        Answer::create([
          'text' => $answer->name,
          'options_id' => $step->id,
          'next_step_id' => $answer->next_step_id,
        ]);
      }
    }
  }
}