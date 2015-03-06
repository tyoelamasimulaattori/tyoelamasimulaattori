/*
 * This is needed for stubbing react-router's functionality in our tests
 * https://github.com/rackt/react-router/blob/master/docs/guides/testing.md
 */
import { default as React } from 'react/addons';
import { noop, extend } from 'lodash';

export const stubRouterContext = (Component, props, stubs) => {
  return React.createClass({
    childContextTypes: {
      makePath: noop,
      makeHref: noop,
      transitionTo: noop,
      replaceWith: noop,
      goBack: noop,
      getCurrentPath: noop,
      getCurrentRoutes: noop,
      getCurrentPathname: noop,
      getCurrentParams: noop,
      getCurrentQuery: noop,
      isActive: noop
    },

    getChildContext () {
      return extend({
        makePath () {},
        makeHref () {},
        transitionTo () {},
        replaceWith () {},
        goBack () {},
        getCurrentPath () {},
        getCurrentRoutes () {},
        getCurrentPathname () {},
        getCurrentParams () {},
        getCurrentQuery () {},
        isActive () {},
      }, stubs);
    },

    render () {
      return <Component {...props} />
    }
  });
};
