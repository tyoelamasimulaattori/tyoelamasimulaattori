import { default as React } from 'react';
import { Button, Form, Modal } from 'components';
import Login from './login';
import { loginActions } from 'actions';
import { loginStore } from 'stores';

const { Dialog, Footer } = Modal;

export default React.createClass({
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
  componentDidMount() {
    this.removeListener = loginStore.listen(this.onDataChange);
  },
  componentWillUnmount() {
    this.removeListener();
  },
  render() {
    return (
      <Modal small hidden={!this.state.loginModalOpen} onCloseIntention={this.cancel}>
        <Login onCancel={this.onCancel} onLogin={this.onLogin} />
      </Modal>
    );
  }
})
