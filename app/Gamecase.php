<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Step;

class Gamecase extends Model {
  protected $fillable = ['id', 'name', 'image', 'perspective_id', 'text', 'disabled'];
  public function steps() {
    return $this->hasMany('App\Step');
  }
  public function person() {
    return $this->hasOne('App\Person');
  }
}

