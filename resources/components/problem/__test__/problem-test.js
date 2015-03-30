/* global describe, it */

import { createMockDOM } from 'test-utils/testdom';
createMockDOM('<html><body></body></html>');

import { equal } from 'assert';
import { default as React } from 'react/addons';
import { noop } from 'lodash';
import { default as Problem } from 'components/problem';

var { TestUtils } = React.addons;

describe('Problem', function() {

  it('should render a title, description, image and the number of questions, which are related to the given problem, in the inputted perspective', function() {
    var problem = {
      name: 'Problem 1',
      description: 'Test problem #1 out of ?',
      image: '10.png',
      answers: [
        {name: 'Test question 1', correct: false},
        {name: 'Test question 2', correct: true},
        {name: 'Test question 4', correct: false}
      ]
    };
    //stub onClick function
    var  onSelect = noop;
    // Render element into a document
    var problemTest = TestUtils.renderIntoDocument(
      <Problem
        name={problem.name}
        description={problem.description}
        image={problem.image}
        answers={problem.answers}
        onSelect={this.onSelect} />
    );

    // Search all elements from rendered component with the given class name
    var questions = TestUtils.scryRenderedDOMComponentsWithClass(
      problemTest,
      'question'
    );
    var problems = TestUtils.scryRenderedDOMComponentsWithClass(
      problemTest,
      'problem'
    );
    var description = TestUtils.scryRenderedDOMComponentsWithClass(
      problemTest,
      'problem__description'
    );

    equal(problems.length, 1);
    equal(description, problem.description);
    equal(questions.length, 3);
  });
});
