<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Model::unguard();

		$this->call('AnswersTableSeeder');
		$this->call('GamecaseTableSeeder');
		$this->call('StepTableSeeder');
		$this->call('PersonTableSeeder');
		$this->call('TipsTableSeeder');
		$this->call('PerspectiveTableSeeder');
	}

}
