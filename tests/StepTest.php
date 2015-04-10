<?php

use App\Step;
use Illuminate\Support\Facades\DB as DB;

class StepTest extends TestCase {

  function testCreatingAndReadingExampleStep()
  {
    $testStepId = DB::table('steps')->max('id') + 1;

    Step::create([
      'id' => $testStepId,
      'image' => "imagejpg",
      'description' => "Example description",
      'gamecase_id' => 0
    ]);

    $testStep = Step::find($testStepId);

    $this->assertEquals($testStep->id, $testStepId);
    $this->assertEquals($testStep->image, "imagejpg");
    $this->assertEquals($testStep->gamecase_id, 0);
    $this->assertEquals($testStep->description, "Example description");

    $this->seed();
  }
}
