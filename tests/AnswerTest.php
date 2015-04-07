<?php

class AnswerTest extends TestCase {

  function testRightAmountOfAnswersInDemoCaseAfterSeeding() {
    $this->seed();

    $response = $this->call('GET', 'api/cases/0');
    $demoCaseString = $response->getContent();
    $demoCase = json_decode($demoCaseString);
    $demoCaseSteps = $demoCase->steps;
    $demoCaseStep0Answers = $demoCaseSteps[0]->answers;
    $demoCaseStep1Answers = $demoCaseSteps[1]->answers;
    $demoCaseStep2Answers = $demoCaseSteps[2]->answers;
    $demoCaseStep3Answers = $demoCaseSteps[3]->answers;

    $this->assertEquals(count($demoCaseStep0Answers), 4);
    $this->assertEquals(count($demoCaseStep1Answers), 3);
    $this->assertEquals(count($demoCaseStep2Answers), 3);
    $this->assertEmpty($demoCaseStep3Answers);
  }
}
