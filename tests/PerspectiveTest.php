<?php

use App\Perspective;
use Illuminate\Support\Facades\DB as DB;

class PerspectiveTest extends TestCase {

  function testCreatingAndReadingExamplePerspective() {
    $testPerspectiveId = DB::table('perspectives')->max('id') + 1;
    Perspective::create([
        'title' => "Example title",
        'image' => "imagepng",
        'description' => "Example description"
    ]);

    $testPerspective = Perspective::find($testPerspectiveId);

    $this->assertEquals($testPerspective->title, "Example title");
    $this->assertEquals($testPerspective->image, "imagepng");
    $this->assertEquals($testPerspective->description, "Example description");

    $this->seed();
  }
}