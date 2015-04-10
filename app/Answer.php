<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model {

  protected $fillable = ['text', 'step_id', 'correct', 'feedback'];

  public function getCorrectAttribute($value) {
    return (bool) $value;
  }
}
