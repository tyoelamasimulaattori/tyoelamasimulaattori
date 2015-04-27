import { default as React } from 'react';
import { Button, Modal } from 'components';
import { loginStore } from 'stores';
import { loginActions } from 'actions';

const { Dialog, Footer } = Modal;

export default React.createClass({
  logIn() {
    loginActions.showLoginModal();
  },
  onCloseIntention() {
    this.context.router.transitionTo('/');
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  render() {

    var button;
    
    if(loginStore.isLoggedIn()) {
      button = (
        <Button to="/">
          Takaisin
        </Button>
      );
    }
    else {
      button = (
        <Button to="/" onClick={this.logIn}>
          Kirjaudu sisään
        </Button>
      );
    }

    return (
      <Modal id="index-view" onCloseIntention={this.onCloseIntention}>
        <Dialog>
          <h1>Tervetuloa</h1>
          <p>
            Tämä on PSHP:n Tilannehallinta-simulaatiopeli.
            Simulaatiopelin tavoite on tarjota interaktiivista koulutusta esimiehille hyödyntäen realistisia työelämän ongelmia, joita ratkoa.
            Simulaatiopeli etenee seuraavalla tavalla:
            <ul>
              <li>Ensin rekisteröidy tai kirjaudu sisään, jonka jälkeen valitse lähestymisnäkökulmasi annetuista vaihtoehdoista (Valitse näkökulma).</li>
              <li>Seuraavaksi valitse tapaus, jonka haluat suorittaa. (Valitse tapaus näkökulmasta ...). HUOMIO! Demoversiossa on vain yksi tapaus (tapaus Kaija), joka löytyy Toimintakulttuuri-näkökulman alta.</li>
              <li>Tapauksen alkaessa sinulle esitetään alkutilanne ja siihen erilaisia vastausvaihtoehtoja. Valitse mielestäsi paras vaihtoehto hyödytäen vihjettä ja lisämateriaalia.</li>
              <li>Valittuasi vaihtoehdon tapaus etenee palautteeseen ja siitä seuraavaan vaiheeseen. Jatka vaihtoehtojen valitsemista, kunnes pääset tapauksen loppuun.</li>
              <li>Lopussa sinulle esitetään loppupalaute sekä vastaamasi vastaukset, jonka jälkeen voit joko lopettaa pelin tai aloittaa uuden tapauksen. Valittuasi kumman tahansa pääset simulaatiopelin aloitussivulle.</li>
            </ul>
          </p>

          <Footer>
            <p>Ennen kuin aloitat simulaatiopelin, varmista, että sinulla on oma DiSC-profiili, sillä tulet tarvitsemaan sitä tässä pelissä.</p>

            <div className="controls">
              {button}
            </div>
          </Footer>
        </Dialog>
      </Modal>
    );
  }
})