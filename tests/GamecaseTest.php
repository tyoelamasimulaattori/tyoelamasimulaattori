<?php

use App\Gamecase;
use Illuminate\Support\Facades\DB as DB;

class GamecaseTest extends TestCase {

  function testCreatingAndReadingExampleGamecase() {
    $testGamecaseId = DB::table('gamecases')->max('id') + 1;
    Gamecase::create([
        'id' => $testGamecaseId,
        'name' => "Example name",
        'image' => "imagepng",
        'perspective_id' => 1,
		'text' => "Example text",
		'disabled' => false
    ]);

    $testGamecase = Gamecase::find($testGamecaseId);

    $this->assertEquals($testGamecase->id, $testGamecaseId);
    $this->assertEquals($testGamecase->name, "Example name");
    $this->assertEquals($testGamecase->image, "imagepng");
    $this->assertEquals($testGamecase->perspective_id, 1);
    $this->assertEquals($testGamecase->text, "Example text");
    $this->assertEquals($testGamecase->disabled, false);

    $this->seed();
  }
}