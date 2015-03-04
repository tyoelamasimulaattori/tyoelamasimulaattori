<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCaseTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		// CASE:lla on id, nimi (lyhyt kuvaus
		// sekä sisältö eli teksti. 
		Schema::create('case', function(Blueprint $table) {
			$table->increments('id');
			$table->string('name')->unique();
			$table->text('text');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('case');
	}

}
