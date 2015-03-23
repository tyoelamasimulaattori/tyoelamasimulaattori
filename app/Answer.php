<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model {
  public function getCorrectAttribute($value) {
    return (bool) $value;
  }
}
