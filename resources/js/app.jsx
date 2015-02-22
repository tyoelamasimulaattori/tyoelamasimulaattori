import { default as React } from 'react';
import { RouteHandler } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div id="app">
        <RouteHandler/>
      </div>
    );
  }
})
