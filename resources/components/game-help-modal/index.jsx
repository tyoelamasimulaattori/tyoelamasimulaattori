import { default as React } from 'react';

import Modal from 'components/modal';
import Button from 'components/button';
const { Dialog, Footer } = Modal;

export default React.createClass({
  render() {
    return (
      <Modal {...this.props}>
        <Dialog>
          <h1>Näin pelaat Tilannehallintaa</h1>
          <p>
            <ul>
               <li>Lue kyseessä olevan tilanteen kuvaus huolellisesti.</li>
               <li>Valitse parhaiten sopiva vaihtoehto tilanteen kuvauksen alla olevista vaihtoehdoista.</li>
               <li>Vastauksen valitsemisen tueksi voit käyttää vihjettä, jonka saat painamalla Vihje-nappulaa tilanteen kuvauksen alta.</li>
               <li>Myös vasemmalta löytyvästä lisämateriaalipankista saat sekä apua tilanteen ratkaisemiseen että yleistä tietoa johtamisesta ja esimiestoiminnasta.</li>
               <li>Valittuasi vaihtoehdon pääset palautteeseen, joka määrittyy vastauksesi mukaan.</li>
               <li>Lue palaute huolellisesti.</li>
               <li>Luettuasi palautteen paina Jatka-nappulaa, ja pääset uuteen tilanteeseen eli steppiin.</li>
               <li>Jatka tapausta siihen asti, kunnes pääset loppunäkymään. Halutessasi voit lopettaa pelin painamalla Lopeta-nappulaa.</li>
            </ul>
          </p>
          <Footer>
            <Button onClick={this.props.onCancel}>
              Takaisin
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    )
  }
});
