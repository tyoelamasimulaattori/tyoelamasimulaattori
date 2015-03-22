import { default as React } from 'react';
import { RouteHandler } from 'react-router';
import { caseActions } from 'actions';

export default React.createClass({
  render() {
    return (
      <div id="app">
        <RouteHandler {...this.props} />
      </div>
    );
  },
  componentDidMount() {
    caseActions.getCases();
  }
})
