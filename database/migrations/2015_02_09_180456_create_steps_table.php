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
			$table->text('description');
			$table->string('image');
			$table->boolean('end')->default(false);
			$table->boolean('feedback')->default(false);
			$table->integer('gamecase_id')->references('id')->on('gamecases');
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
