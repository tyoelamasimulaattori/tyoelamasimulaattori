/* global jest, describe, it */

jest.dontMock('components/case-selector');
jest.dontMock('components/button');

import { default as React } from 'react/addons';
import { default as CaseSelector } from 'components/case-selector';

var { TestUtils } = React.addons;

describe('Case selector', function() {

  it('should render the amount of cases in inputted perspective', function() {
    var cases = [
      {title: 'Case 1'},
      {title: 'Case 2'},
      {title: 'Case 4'},
      {title: 'Case 5'},
      {title: 'Case 6'},
      {title: 'Case 7'}
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

    expect(cases.length).toEqual(6);
  });

  it('should render a title element when "title" property is given', function() {
    var TITLE = 'Hello world';

    var caseSelector = TestUtils.renderIntoDocument(
      <CaseSelector title={TITLE} />
    );

    var titleElement = TestUtils.findRenderedDOMComponentWithTag(
      caseSelector,
      'h2'
    );

    expect(titleElement.getDOMNode().textContent).toEqual(TITLE + ' caset');
  });
});
