<?php

class APITest extends TestCase {

  function testWhetherAPIReturnsValidJson() {
    $this->seed();

    $url = asset('api/cases');
    $response = $this->call('GET', $url);
    $cases = $response->getContent();

    $this->assertJson($cases);
  }
}
