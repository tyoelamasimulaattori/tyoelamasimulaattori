import { default as React } from 'react';
import { Modal, Button, Controls, View, UserProfile } from 'components';
import { imagePath } from 'filters';
import { findLast } from 'lodash';

const { Dialog, Footer } = Modal;

export default React.createClass({
  getInitialState() {
    return {
      isModalOpen: true
    };
  },
  toggleModal: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },
  render() {
    const currentStep = findLast(this.props.currentCase.steps);

    const modal = (
      <Modal hidden={!this.state.isModalOpen} onCloseIntention={this.toggleModal}>
        <Dialog>
          <h1>Demo on päättynyt</h1>
          <p>
            Tämä demo Tilannehallinta-simulaattoripelistä loppuu tähän. Lopullisessa pelissä <br />
            tulee olemaan useampia tapauksia, joissa myös askeleita on paljon enemmän.
          </p>

          <p>
            Kiitos kun kokeilit demoa! Paina alla olevaa nappian nähdäksesi<br />
            valintojesi tuloksen. Lopeta-napista simulaatiopeli loppuu ja <br />
            pääset pelin alkuun, missä voit aloittaa pelin uudelleen uudesta näkökulmasta ja uudella tapauksella.
          </p>
          <Footer>
            <Button onClick={this.toggleModal}>
              Loppunäkymään
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    )

    return (
      <View id="end-view">
        <div className="end-view__header">
          <UserProfile />
        </div>
        <div className="end-view-content">
            <div className="row">
              <div className="column column1-5">
                 <img src={imagePath("pshp_elaman_tahden.png")} />
              </div>
              <div className="column column4-5">
                <p>
                  <h1>Tapauksen lopputulos</h1>
                </p>
              </div>
            </div>

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
          <hr />
          <h2> Tässä valintasi graafisessa muodossa: </h2>
          <img src={imagePath("newEnding.png")} />

          <Controls>
            <Button to="/">Lopeta</Button>
          </Controls>

          {modal}
        </div>
      </View>
    );
  }
})
