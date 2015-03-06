/* global jest, describe, it */

jest.dontMock('components/case-selector');
jest.dontMock('components/button');
jest.dontMock('test-utils/stubRouterContext');

import { stubRouterContext } from 'test-utils/stubRouterContext';
import { default as React } from 'react';
import { default as CaseSelector } from 'components/case-selector';

var { TestUtils } = React.addons;

describe('Case selector', function() {

  it('should render the amount of cases in inputted perspective', function() {
    var perspective = {
      id: 'johtaminen',
      title: 'Johtaminen',
      description: 'Lorem ipsum',
      cases: [
        {title: 'Case 1'},
        {title: 'Case 2'},
        {title: 'Case 4'},
        {title: 'Case 5'},
        {title: 'Case 6'},
        {title: 'Case 7'}
      ]
    };

    /*
     * Well have to stub this component since it uses Button component
     * that includes components from "react-router" library.
     * Those components are a bit more complex and Jest don't know how to
     * mock them automatically.
     */

    var StubbedCaseSelector = stubRouterContext(CaseSelector, {
      perspective
    });

    // Render element into a document
    var caseSelector = TestUtils.renderIntoDocument(
      <StubbedCaseSelector />
    );

    // Search all elements from rendered component with class name "case"
    var cases = TestUtils.scryRenderedDOMComponentsWithClass(
      caseSelector,
      'case'
    );

    expect(cases.length).toEqual(6);
  });
});
