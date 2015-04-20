import { default as React } from 'react';
import { noop } from 'lodash';
import classNames from 'classnames';

const Modal = React.createClass({
  getDefaultProps() {
    return {
      hidden: false,
      small: false,
      onCloseIntention: noop
    };
  },
  render() {
    const classes = classNames({
      'modal': true,
      'modal--hidden': this.props.hidden,
      'modal--small': this.props.small
    });

    return (
      <div className={classes} onClick={this.props.onCloseIntention}>
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
  stopPropagation(event) {
    event.stopPropagation();
  },
  render() {
    return (
      <div className="modal__dialog" onClick={this.stopPropagation}>
        {this.props.children}
      </div>
    );
  }
});

export {
  Modal as default
};
