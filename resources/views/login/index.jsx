import { default as React } from 'react';
import { Button, Form, Modal } from 'components';
import { loginActions } from 'actions';
import { loginStore } from 'stores';

const { Dialog, Footer } = Modal;

export default React.createClass({
  cancel() {
    loginActions.closeLoginModal();
  },
  login() {
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
      <Modal small hidden={!this.state.loginModalOpen}>
        <Dialog>
          <h1>Kirjaudu sisään</h1>
          <p>
            Lorem ipsum Aute occaecat Duis proident Ut Duis veniam in velit labore sed non id eiusmod.
          </p>
          <Form>
            <label>Sähköpostiosoite</label>
            <input type="text" />
            <label>Salasana</label>
            <input type="text" />
          </Form>
          <Footer>
            <div className="controls">
              <Button onClick={this.login}>
                Kirjaudu sisään
              </Button>
              <Button onClick={this.cancel}>
                Peruuta
              </Button>
            </div>
          </Footer>
        </Dialog>
      </Modal>
    );
  }
})