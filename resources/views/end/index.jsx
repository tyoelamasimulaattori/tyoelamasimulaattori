import { default as React } from 'react';
import { Modal, Button, Controls, View } from 'components';
import { imagePath } from 'filters';
import { findLast } from 'lodash';

const { Dialog, Footer } = Modal;

export default React.createClass({
  getInitialState() {
    return {
      isModalOpen: true
    };
  },
  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },
  render() {
    const currentStep = findLast(this.props.currentCase.steps);

    const modal = (
      <Modal hidden={!this.state.isModalOpen}>
        <Dialog>
          <h1>Demo on päättynyt</h1>
          <p>
            Tämä demo työelämäsimulaattorista loppuu tähän. Lopullisessa pelissä tulee olemaan
            monta tapausta, joissa askeleita on paljon enemmän.
          </p>

          <p>
            Kiitos kun kokeilit demoa! Paina alla olevaa nappian nähdäksesi valintojesi
            lopputuloksen.
          </p>
          <Footer>
            <Button onClick={this.handleToggle}>
              Loppunäkymään
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    )

    return (
      <View id="end-view">
        <div className="end-view-content">
          <h1>Tapauksen lopputulos</h1>

          <div className="row">
            <div className="column column1-5">
              <img src={imagePath(currentStep.image)} />
            </div>
            <div className="column column4-5">
              <p>
                {currentStep.description}
              </p>
            </div>
          </div>

          <h3>
            Olet tullut demovaiheen loppuun, ja valitettavasti demovaiheessa ei voi jatkaa pidemmälle.
            Muistitko ottaa huomioon vastapuolen DiSC-profiilin? Kokeile uutta tapausta eri näkökulmasta tai pohdi, miten olisit
            voinut suoriutua vielä paremmin!
          </h3>
          <hr />
          <h2> Tässä valintasi graafisessa muodossa: </h2>
          <img src={imagePath("ending.png")} />

          <Controls>
            <Button to="/">Lopeta</Button>
          </Controls>

          {modal}
        </div>
      </View>
    );
  }
})
