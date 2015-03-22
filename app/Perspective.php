<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Perspective extends Model {
  public function cases() {
    return $this->hasMany('App\GameCase');
  }
}
