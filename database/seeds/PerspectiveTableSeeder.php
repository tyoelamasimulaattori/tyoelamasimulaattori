<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Perspective;

class PerspectiveTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    DB::table('perspectives')->delete();

    $json = Storage::get('Perspectives.json');
    $perspectives = json_decode($json);

    foreach ($perspectives as $perspective) {
      Perspective::create((array) $perspective);
    }
  }
}
