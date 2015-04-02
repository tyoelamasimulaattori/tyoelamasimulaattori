<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamecasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		// CASE:lla on id, nimi (lyhyt kuvaus
		// sekä sisältö eli teksti.
		Schema::create('gamecases', function(Blueprint $table) {
			$table->integer('id')->nullable();
			$table->string('name')->unique();
			$table->string('image');
			$table->text('text');
			$table->integer('perspective_id')->references('id')->on('perspectives');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('gamecases');
	}

}
