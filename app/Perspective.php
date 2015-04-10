<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Perspective extends Model {
  protected $fillable = ['title', 'image', 'description'];
  public function cases() {
    return $this->hasMany('App\Gamecase');
  }
}
