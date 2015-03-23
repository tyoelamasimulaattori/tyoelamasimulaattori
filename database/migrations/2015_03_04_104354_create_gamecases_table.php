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
			$table->integer('id');
			$table->string('name')->unique();
			$table->text('text');
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
