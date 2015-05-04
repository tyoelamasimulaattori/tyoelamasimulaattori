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
              <li>Aloita rekisteröitymällä tai kirjautumalla sisään.</li>
              <li>Rekisteröidyttyäsi tai kirjauduttuasi valitse lähestymisnäkökulmasi annetuista vaihtoehdoista (Valitse näkökulma).</li>
              <li>Seuraavaksi valitse tapaus, jonka haluat suorittaa. (Valitse tapaus näkökulmasta ...). HUOMIO! Demoversiossa on avoinna vain yksi tapaus (tapaus Kaija), joka löytyy Toimintakulttuuri-näkökulman alta.</li>
              <li>Tapauksen alkaessa sinulle esitetään alkutilanne, tilanteeseen liittyvän henkilön kuvaus sekä erilaisia vastausvaihtoehtoja. Valitse mielestäsi paras vaihtoehto hyödytäen annettua vihjettä sekä vasemmasta reunasta löytyviä lisämateriaaleja.</li>
              <li>Valittuasi vaihtoehdon tapaus etenee palautteeseen ja siitä edelleen seuraavaan vaiheeseen. Jatka vaihtoehtojen valitsemista, kunnes pääset tapauksen loppuun.</li>
              <li>Lopussa sinulle esitetään loppupalaute sekä vastaamasi vastaukset graafisesti, jonka jälkeen tapaus loppuu, ja pääset aloitusnäkymään. Voit halutessasi valita uuden tapauksen uudesta näkökulmasta, jonka suorittaa.</li>
            </ul>
          </p>

          <Footer>
            <div className="controls">
              {button}
            </div>
          </Footer>
        </Dialog>
      </Modal>
    );
  }
})