/*
 * This is needed for stubbing react-router's functionality in our tests
 * https://github.com/rackt/react-router/blob/master/docs/guides/testing.md
 */
import { default as React } from 'react';
var { func } = React.PropTypes;
import { noop, extend } from 'lodash';

export const stubRouterContext = (Component, props, stubs) => {
  return React.createClass({
    childContextTypes: {
      makePath: func,
      makeHref: func,
      transitionTo: func,
      replaceWith: func,
      goBack: func,
      getCurrentPath: func,
      getCurrentRoutes: func,
      getCurrentPathname: func,
      getCurrentParams: func,
      getCurrentQuery: func,
      isActive: func
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
