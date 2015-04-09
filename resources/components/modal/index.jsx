import { default as React } from 'react';
import classNames from 'classnames';

const Modal = React.createClass({
  getDefaultProps() {
    return {
      hidden: false,
      small: false
    };
  },
  render() {
    const classes = classNames({
      'modal': true,
      'modal--hidden': this.props.hidden,
      'modal--small': this.props.small
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
})

Modal.Footer = React.createClass({
  render() {
    return (
      <div className="modal__footer">
        {this.props.children}
      </div>
    );
  }
});

Modal.Dialog = React.createClass({
  render() {
    return (
      <div className="modal__dialog">
        {this.props.children}
      </div>
    );
  }
});

export {
  Modal as default
};
