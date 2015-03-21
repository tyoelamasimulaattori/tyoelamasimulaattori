<?php namespace App\Http\Controllers\Step;

use App\Http\Controllers\Controller;
use App\Step;
use Input;
use App\Answer;
use App\Options;

class StepController extends Controller {

  public function postIndex() {
    $step = Step::create(Input::all());
    return $step;
  }
  public function getOptions($stepId) {
    $answers = Answer::where('step_id', '=', $stepId)->get();
    return $answers;
  }
}
