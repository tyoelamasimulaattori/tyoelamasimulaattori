import { default as React } from 'react';

import Modal from 'components/modal';
import Button from 'components/button';
const { Dialog, Footer } = Modal;

export default React.createClass({
  render() {
    return (
      <Modal {...this.props}>
        <Dialog>
          <h3 id="conf-modal">Lopeta peli</h3>
          <p id="conf-modal">
            Haluatko tallentaa pelin?
          </p>
          <Footer>
            <Button to="/">
              Tallenna
            </Button>
            <Button to="/">
              Älä tallenna
            </Button>
            <Button onClick={this.props.onCancel}>
              Peruuta
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    )
  }
});
