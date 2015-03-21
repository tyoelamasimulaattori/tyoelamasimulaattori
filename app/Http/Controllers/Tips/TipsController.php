<?php namespace App\Http\Controllers\Tips;

use App\Http\Controllers\Controller;
use App\Tip;

class TipsController extends Controller {

  public function getIndex() {
    $tips = Tip::all();
    return $tips;
  }

  public function getTip($tipId) {
    $tip = Tip::find($tipId);
    return $tip;
  }
}