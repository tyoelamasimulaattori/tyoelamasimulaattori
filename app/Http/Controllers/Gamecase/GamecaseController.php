<?php namespace App\Http\Controllers\Gamecase;

use App\Http\Controllers\Controller;
use App\Gamecase;
use Input;
use App\Step;
use App\Person;

class GamecaseController extends Controller {

  public function index() {
    $gamecase = Gamecase::with('steps', 'person')->get();
    return $gamecase;
  }

  public function show($caseId) {

    $gamecase = Gamecase::with(['steps' => function($query) {
      $query->with('answers');
    }])->with('person')->find($caseId);

    return $gamecase;
  }

  public function create() {
    $gamecase = Gamecase::create(Input::all());
    return $gamecase;
  }
}
