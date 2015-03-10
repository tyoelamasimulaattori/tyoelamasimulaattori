<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class OptionsTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    DB::table('options')->delete();

    $json = Storage::get('MockCaseNewVersion');
    $case = json_decode($json);
    $steps = $case[0]->steps;
    /* Options id is the same as steps id. */
    foreach($steps as $step) {
      Options::create([
        'id' => $step->id
      ]);
    }
  }
}