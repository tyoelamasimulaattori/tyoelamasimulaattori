<?php namespace App\Http\Controllers\Gamecase;

use App\Http\Controllers\Controller;
use App\Gamecase;
use Input;
use App\Step;

class GamecaseController extends Controller {

  public function postIndex() {
    $gamecase = Gamecase::create(Input::all());
    return $gamecase;
  }
  public function getCase($caseId) {
    $gamecase = Gamecase::find($caseId);
    return $gamecase;
  }
  public function getSteps($caseId) {
    $steps = Step::where('gamecase_id', '=', $caseId)->get();
    return $steps;
  }
}
