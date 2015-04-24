import { default as React } from 'react';
import { RouteHandler } from 'react-router';
import { caseActions, perspectiveActions, tipActions } from 'actions';

import { LoginView } from 'views';

export default React.createClass({
  render() {
    return (
      <div id="app">
        <RouteHandler {...this.props} />
        <LoginView />
      </div>
    );
  },
  componentDidMount() {
    caseActions.getCases();
    tipActions.getTips();
    perspectiveActions.getPerspectives();
  }
})
