<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStepsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('steps', function(Blueprint $table) {
			$table->integer('id');
			$table->text('text');
			$table->string('image');
			$table->integer('gamecase_id')->references('id')->on('gamecases');
			$table->integer('options_id')->references('id')->on('options');
			/* -1 negative, 1 positive */
			$table->integer('direction');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('steps');
	}
}
