<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Step extends Model {
  public function answers() {
    return $this->hasMany('App\Answer');
  }
}
