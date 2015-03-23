<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePeopleTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('people', function(Blueprint $table) {
			$table->increments('id');
			$table->string('name');
			$table->string('image');
			$table->string('title');
			$table->text('description');
			$table->integer('gamecase_id')->references('id')->on('gamecases');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('people');
	}

}
