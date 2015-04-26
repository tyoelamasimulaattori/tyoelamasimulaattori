import { default as _ } from 'lodash';
import { default as React } from 'react';
import { Link } from 'react-router';

import { default as classNames } from 'classnames';

export default React.createClass({
  getDefaultProps() {
    return {
      className: ''
    };
  },
  render() {
    const classes = classNames({
      'btn': true,
      'btn--primary': !this.props.warning,
      'btn--warning': this.props.warning,
      'btn--active': this.props.active
    });

    var props = _.extend({}, this.props, {
      className: [classes, this.props.className].join(' ').trim()
    });

    var tag = this.props.to ? Link : 'button';

    return React.createElement(tag, props, this.props.children);
  }
});
