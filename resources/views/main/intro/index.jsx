import { default as React } from 'react';
import { Button, Modal } from 'components';
import { loginStore } from 'stores';
import { loginActions } from 'actions';

const { Dialog, Footer } = Modal;

export default React.createClass({
  logIn() {
    loginActions.showLoginModal();
  },
  render() {
    return (
      <Modal id="index-view">
        <Dialog>
          <h1>Tervetuloa</h1>

          <p>
            Tämä on PSHP:n työelämäsimulaattori.
            Simulaattorin tavoite on tarjota interaktiivista koulutusta esimiehille hyödyntäen realistisia työelämän ongelmia, joita ratkoa.
            Simulaattori etenee seuraavalla tavalla:
            <ul>
              <li>Ensin rekisteröidy tai kirjaudu sisään, jonka jälkeen valitse lähestymisnäkökulmasi annetuista vaihtoehdoista (Valitse näkökulma).</li>
              <li>Seuraavaksi valitse tapaus, jonka haluat suorittaa. (Valitse tapaus näkökulmasta ...). HUOMIO! Demoversiossa on vain yksi tapaus (tapaus Kaija), joka löytyy Toimintakulttuuri-näkökulman alta.</li>
              <li>Tapauksen alkaessa sinulle esitetään alkutilanne ja siihen erilaisia vastausvaihtoehtoja. Valitse mielestäsi paras vaihtoehto hyödytäen vihjeitä ja muuta materiaalia.</li>
              <li>Valittuasi vaihtoehdon tapaus etenee seuraavaan vaiheeseen. Jatka vaihtoehtojen valitsemista, kunnes pääset tapauksen loppuun.</li>
              <li>Lopussa sinulle esitetään loppupalaute sekä vastaamasi vastaukset, jonka jälkeen voit joko lopettaa pelin tai aloittaa uuden tapauksen.</li>
            </ul>
          </p>

          <Footer>
            <p>Ennen kuin aloitat simulaattorin, varmista, että sinulla on oma DiSC-profiili, sillä tulet tarvitsemaan sitä simulaatiossa.</p>

            <div className="controls">
              <Button to="/" onClick={this.logIn}>
                Kirjaudu sisään
              </Button>
            </div>
          </Footer>
        </Dialog>
      </Modal>
    );
  }
})
