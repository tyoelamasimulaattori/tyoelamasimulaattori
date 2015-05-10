import React from 'react';
import Reflux from 'reflux';
import { Button, Form, Modal } from 'components';
import Login from './login';
import { loginActions } from 'actions';
import { loginStore } from 'stores';

const { Dialog, Footer } = Modal;

export default React.createClass({
  mixins: [Reflux.listenTo(loginStore, 'onDataChange')],
  onCancel() {
    loginActions.closeLoginModal();
  },
  onLogin() {
    loginActions.login();
  },
  getInitialState() {
    return this.getState();
  },
  getState() {
    return {
      loginModalOpen: loginStore.isLoginModalOpen()
    };
  },
  onDataChange() {
    this.setState(this.getState());
  },
  render() {
    return (
      <Modal small hidden={!this.state.loginModalOpen} onCloseIntention={this.cancel}>
        <Login onCancel={this.onCancel} onLogin={this.onLogin} />
      </Modal>
    );
  }
})
