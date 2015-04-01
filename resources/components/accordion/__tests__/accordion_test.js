/* global describe, it */

import { createMockDOM } from 'test-utils/testdom';
createMockDOM('<html><body></body></html>');

import { equal } from 'assert';
import { default as React } from 'react/addons';
import { default as Accordion } from 'components/accordion';

var { TestUtils } = React.addons;

describe('Accordion', function() {

  it('should render the amount of tips inputted into the perspective', function() {
    var tips = [
      {name: 'Hint 1', id: 0, text: "TestHint"},
      {name: 'Hint 2', id: 1, text: "TestHint"},
      {name: 'Hint 3', id: 2, text: "TestHint"},
      {name: 'Hint 4', id: 3, text: "TestHint"},
      {name: 'Hint 5', id: 4, text: "TestHint"},
      {name: 'Hint 6', id: 5, text: "TestHint"},
      {name: 'Hint 7', id: 6, text: "TestHint"},
      {name: 'Hint 8', id: 7, text: "TestHint"}
    ];

    // Render element into a document
    var accordion = TestUtils.renderIntoDocument(
      <Accordion tips={tips} />
    );

    // Search all elements from rendered component with class name "case"
    var tips = TestUtils.scryRenderedDOMComponentsWithClass(
      accordion,
      'tip'
    );

    equal(tips.length, 8);
  });
});
