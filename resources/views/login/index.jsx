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
      <Modal small hidden={!this.state.loginModalOpen} onCloseIntention={this.cancel}>
        <Dialog>
          <h1>Kirjaudu sisään</h1>
          <p>
            Syötä sähköpostiosoitteesi ja salasanasi. Jos sinulla ei ole tiliä tähän palveluun, voit rekisteröitä painamalla alla olevaa linkkiä.
          </p>
          <Form>
            <label>Sähköpostiosoite</label>
            <input type="text" />
            <label>Salasana</label>
            <input type="text" />
          </Form>
          <Footer>
            <a href="#">Rekisteröidy</a>
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
