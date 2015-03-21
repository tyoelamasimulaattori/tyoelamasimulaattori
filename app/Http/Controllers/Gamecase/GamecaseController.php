<?php namespace App\Http\Controllers\Gamecase;

use App\Http\Controllers\Controller;
use App\Gamecase;
use Input;

class GamecaseController extends Controller {

  public function postIndex() {
    $gamecase = Gamecase::create(Input::all());
    return $gamecase;
  }
  public function getCase($caseId) {
    $gamecase = Gamecase::find($caseId);
    return $gamecase;
  }
}
