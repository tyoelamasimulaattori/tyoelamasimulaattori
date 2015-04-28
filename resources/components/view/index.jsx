import { default as React } from 'react';
import { default as _ } from 'lodash';

export default React.createClass({
  render() {

    var props = _.extend({}, this.props, {
      className: 'view'
    });

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

export const Container = React.createClass({
  render() {

    var props = _.extend({}, this.props, {
      className: 'view__container'
    });

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

export const Header = React.createClass({
  render() {
    return (
      <div className="view__header" {...this.props}>
        {this.props.children}
      </div>
    );
  }
});

export const Content = React.createClass({
  render() {
    return (
      <div className="view__content" {...this.props}>
        {this.props.children}
      </div>
    );
  }
});
