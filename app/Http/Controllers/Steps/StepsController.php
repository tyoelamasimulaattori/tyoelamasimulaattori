<?php namespace App\Http\Controllers\Steps;

use App\Http\Controllers\Controller;
use App\Step;
use Input;

class StepsController extends Controller {
  public function getIndex() {
    $steps = Step::all();
    return $steps;
  }

  public function postIndex() {
    $step = Step::create(Input::all());
    return $step;
  }
}
