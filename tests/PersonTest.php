<?php

use App\Person;
use Illuminate\Support\Facades\DB as DB;

class PersonTest extends TestCase {

  function testCreatingAndReadingExamplePerson()
  {
    Person::create([
      'name' => "Example name",
      'image' => "imagejpg",
      'title' => "Example title",
      'gamecase_id' => 0,
      'description' => "Example description"
    ]);

    $testPersonId = DB::table('people')->max('id');
    $testPerson = Person::find($testPersonId);

    $this->assertEquals($testPerson->name, "Example name");
    $this->assertEquals($testPerson->image, "imagejpg");
    $this->assertEquals($testPerson->title, "Example title");
    $this->assertEquals($testPerson->gamecase_id, 0);
    $this->assertEquals($testPerson->description, "Example description");

    $this->seed();
  }
}
