<?php

use App\Answer;
use Illuminate\Support\Facades\DB as DB;

class AnswerTest extends TestCase {

  function testCreatingAndReadingExampleAnswer() {
    Answer::create([
      'text' => "Example answer",
      'step_id' => 0,
      'correct' => true,
      'feedback' => "Example feedback"
    ]);

    $testAnswerId = DB::table('answers')->max('id');
    $testAnswer = Answer::find($testAnswerId);

    $this->assertEquals($testAnswer->text, "Example answer");
    $this->assertEquals($testAnswer->step_id, 0);
    $this->assertEquals($testAnswer->correct, true);
    $this->assertEquals($testAnswer->feedback, "Example feedback");

    $this->seed();
  }
}
