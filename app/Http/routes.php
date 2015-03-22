<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(array('prefix' => 'api'), function() {
  Route::resource('tips', 'Tips\TipsController');
  Route::resource('cases', 'Gamecase\GamecaseController');
  Route::resource('cases.steps', 'Step\StepController');
  Route::resource('perspectives', 'Perspective\PerspectiveController');
});

Route::any('{all}', function() {
  return view('index');
})->where('all', '.*');
