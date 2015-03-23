<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Step extends Model {

  public function getEndAttribute($value) {
    return (bool) $value;
  }

  public function answers() {
    return $this->hasMany('App\Answer');
  }
}
