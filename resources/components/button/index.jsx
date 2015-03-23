import { default as _ } from 'lodash';
import { default as React } from 'react/addons';
import { Link } from 'react-router';

const {classSet} = React.addons;

export default React.createClass({
  getDefaultProps() {
    return {
      className: ''
    };
  },
  render() {
    const classNames = classSet({
      'btn': true,
      'btn--primary': !this.props.warning,
      'btn--warning': this.props.warning
    });

    var props = _.extend(this.props, {
      className: [classNames, this.props.className].join(' ').trim()
    });

    var tag = this.props.to ? Link : 'button';

    return React.createElement(tag, props, this.props.children);
  }
});
