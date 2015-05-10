import { default as React } from 'react';
import { Button, Form, Modal } from 'components';
import { noop } from 'lodash';
const { Dialog, Footer } = Modal;

export default React.createClass({
  getDefaultProps() {
    return {
      onLogin: noop,
      onCancel: noop
    };
  },
  render() {
    return (
      <Dialog>
        <h1>Kirjaudu sisään</h1>
        <p>
          Syötä sähköpostiosoitteesi ja salasanasi. Jos sinulla ei ole tiliä tähän palveluun, voit rekisteröitä klikkaamalla <a href="#/signup">tästä</a>.
        </p>
        <Form>
          <label>Sähköpostiosoite</label>
          <input type="text" />
          <label>Salasana</label>
          <input type="text" />
        </Form>
        <Footer>
          <a href="#">Unohditko salasanasi?</a>
          <div className="controls">
            <Button onClick={this.props.onLogin}>
              Kirjaudu sisään
            </Button>
            <Button onClick={this.props.onCancel}>
              Peruuta
            </Button>
          </div>
        </Footer>
      </Dialog>
    );
  }
})
