<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Tip;

class TipsTableSeeder extends Seeder {

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('tips')->delete();

    $json = Storage::get('Tips.json');
    $tips = json_decode($json);

    foreach ($tips as $tip) {
      if (isset($tip->tag)) {
        Tip::create([
          'id' => $tip->id,
          'name' => $tip->name,
          'text' => $tip->text,
          'tag' => $tip->tag,
        ]);
      }
      else {
        Tip::create([
          'id' => $tip->id,
          'name' => $tip->name,
          'text' => $tip->text
        ]);
      }
    }
  }
}