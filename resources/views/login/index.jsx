import { default as React } from 'react';
import { default as classNames } from 'classnames';
import { Button, Form } from 'components';
import { loginActions } from 'actions';
import { loginStore } from 'stores';

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
    const classes = classNames({
      modal: true,
      'modal--small': true,
      'modal--hidden': !this.state.loginModalOpen
    });

    return (
      <div id="login-view" className={classes}>
        <div className="modal__dialog">
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
          <div className="modal__footer">
            <div className="controls">
              <Button onClick={this.login}>
                Kirjaudu sisään
              </Button>
              <Button onClick={this.cancel}>
                Peruuta
              </Button>
            </div>
          </div>

        </div>
      </div>
    );
  }
})
