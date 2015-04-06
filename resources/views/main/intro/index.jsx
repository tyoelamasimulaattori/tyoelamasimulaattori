import { default as React } from 'react';
import { Button, Modal } from 'components';

const { Dialog, Footer } = Modal;

export default React.createClass({
  render() {
    return (
      <Modal id="index-view">
        <Dialog>
          <h1>Tervetuloa</h1>

          <p>
            Tämä on PSHP:n työelämäsimulaattori.
            Simulaattorin tavoite on tarjota interaktiivista koulutusta esimiehille, hyödynteän realistisia työelämän ongelmia, joita ratkoa.
            Simulaattori etenee seuraavalla tavalla:
            <ul>
              <li>Ensin syötä käyttäjätietosi ja valitse lähestymisnäkökulmasi annetuista vaihtoehdoista.</li>
              <li>Simulaattori generoi sinulle kolme tapausta valitsemastasi näkökulmasta, joista voit yhden kokeiltavaksi</li>
              <li>Tapauksessa sinulle esitetään tilanne ja siihen erilaisia ratkaisutapoja. Hyödytäen vinkkeja ja muuta materiaalia, valitse mielestäsi paras vaihtoehto</li>
              <li>Valittuasi vaihtoehdon, tapaus etenee seuraavaan vaiheeseen. Jatka vaeihtoehtojen valitsemista kunnes tapaus pääsee loppuun.</li>
              <li>Lopussa sinulle esitetään  sinun vastaukset ja ideaalisuoritus, jonka jälkeen voit joko lopettaa tai aloittaa uuden tapauksen</li>
            </ul>
          </p>

          <Footer>
            <p>Ennen kuin aloitat simulaattorin, varmista, että sinulla on oma DiSC - profiili, sillä tulet tarvitsemaan sitä simulaatiossa.</p>
            <div className="controls">
              <Button to="/">
                Kirjaudu sisään
              </Button>
              <Button to="/">
                Rekisteröidy
              </Button>
            </div>
          </Footer>

        </Dialog>
      </Modal>
    );
  }
})
