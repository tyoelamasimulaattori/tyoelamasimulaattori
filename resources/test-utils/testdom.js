// http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/#mocking-the-dom
export function createMockDOM(markup) {
  if (typeof document !== 'undefined') return;
  var jsdom = require('jsdom').jsdom;
  global.document = jsdom(markup || '');
  global.window = document.defaultView;
  global.navigator = {
    userAgent: 'node.js'
  };
}
