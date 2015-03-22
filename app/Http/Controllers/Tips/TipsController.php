<?php namespace App\Http\Controllers\Tips;

use App\Http\Controllers\Controller;
use App\Tip;

class TipsController extends Controller {

  public function index() {
    $tips = Tip::all();
    return $tips;
  }

  public function show($tipId) {
    $tip = Tip::find($tipId);
    return $tip;
  }
}
