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
      {title: 'Case 1'},
      {title: 'Case 2'},
      {title: 'Case 3'},
      {title: 'Case 4'},
      {title: 'Case 5'},
      {title: 'Case 6'}
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
});
