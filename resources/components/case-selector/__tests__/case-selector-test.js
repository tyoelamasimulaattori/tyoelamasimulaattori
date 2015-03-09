/* global jest, describe, it */

jest.dontMock('components/case-selector');
jest.dontMock('components/button');
jest.dontMock('test-utils/stubRouterContext');

import { stubRouterContext } from 'test-utils/stubRouterContext';
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

    /*
     * - Our real application has a router (react-router)
     * - We don't need a router for our tests so we don't have one here
     * - Some of our components (like case-selector) include components from react-router (such as Link)
     * - Link needs a router so it knows how to create URL's and so on.
     * - We fake that router here so we can test our own components
     */

    var Stubbed = stubRouterContext(CaseSelector, {cases});

    // Render element into a document
    var caseSelector = TestUtils.renderIntoDocument(
      <Stubbed />
    );

    // Search all elements from rendered component with class name "case"
    var cases = TestUtils.scryRenderedDOMComponentsWithClass(
      caseSelector,
      'case'
    );

    expect(cases.length).toEqual(6);
  });
});
