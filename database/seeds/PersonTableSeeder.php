<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Person;

class PersonTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    DB::table('people')->delete();

    $json = Storage::get('MockCase.json');
    $gamecase = json_decode($json);
    $gamecase_id = $gamecase[0]->id;
    $person = $gamecase[0]->person;

    Person::create([
      'name' => $person->name,
      'image' => $person->image,
      'title' => $person->title,
      'gamecase_id' => $gamecase_id,
      'description' => $person->description
    ]);
  }
}
