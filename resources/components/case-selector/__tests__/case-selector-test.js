/* global describe, it */

import { createMockDOM } from 'test-utils/testdom';
createMockDOM('<html><body></body></html>');

import { equal } from 'assert';
import { default as React } from 'react/addons';
import { default as CaseSelector } from 'components/case-selector';

var { TestUtils } = React.addons;

describe('Case selector', function() {

  it('should render the amount of cases in inputted perspective', function() {
    var cases = [
      {name: 'Case 1'},
      {name: 'Case 2'},
      {name: 'Case 3'},
      {name: 'Case 4'},
      {name: 'Case 5'},
      {name: 'Case 6'}
    ];

    // Render element into a document
    var caseSelector = TestUtils.renderIntoDocument(
      <CaseSelector cases={cases} />
    );

    // Search all elements from rendered component with class name "case"
    var cases = TestUtils.scryRenderedDOMComponentsWithClass(
      caseSelector,
      'case'
    );

    equal(cases.length, 6);
  });

  it('should render cases ordered by their ids', function() {
    var cases = [
      {name: 'Case 2', id: 2},
      {name: 'Case 1', id: 1},
      {name: 'Case 5', id: 5},
      {name: 'Case 3', id: 3},
      {name: 'Case 4', id: 4},
      {name: 'Case 6', id: 6}
    ];

    // Render element into a document
    var caseSelector = TestUtils.renderIntoDocument(
      <CaseSelector cases={cases} />
    );

    // Search all elements from rendered component with class name "case"
    var cases = TestUtils.scryRenderedDOMComponentsWithClass(
      caseSelector,
      'case__title'
    );

    equal(cases[0].getDOMNode().textContent, 'Case 1');
    equal(cases[1].getDOMNode().textContent, 'Case 2');
  });
});
