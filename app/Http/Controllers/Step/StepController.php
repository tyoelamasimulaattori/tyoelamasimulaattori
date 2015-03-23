<?php namespace App\Http\Controllers\Step;

use App\Http\Controllers\Controller;
use App\Step;
use App\Gamecase;
use Input;
use App\Answer;
use App\Options;

class StepController extends Controller {

  public function index($caseId) {
    $steps = Step::with('answers')->where('gamecase_id', '=', $caseId)->get();
    return $steps;
  }

  public function create($caseId) {
    $step = Step::create(Input::all());
    return $step;
  }
}
