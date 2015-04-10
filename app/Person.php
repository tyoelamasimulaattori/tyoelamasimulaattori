<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model {
  protected $fillable = ['name', 'image', 'title', 'gamecase_id', 'description'];
}
