import { default as _ } from 'lodash';
import { default as React } from 'react';
import { Link } from 'react-router';

export default React.createClass({
  getDefaultProps() {
    return {
      className: ''
    };
  },
  render() {

    var props = _.extend(this.props, {
      className: 'btn btn--primary' + this.props.className
    });

    var tag = this.props.to ? Link : 'button';

    return React.createElement(tag, props, this.props.children);
  }
});
