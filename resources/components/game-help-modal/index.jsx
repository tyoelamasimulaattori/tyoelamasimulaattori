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
               <li>Vastauksen avuksi voi käyttää vihjettä, joka saat painamalla Vihje-nappulaa kuvauksen alta.</li>
               <li>Myös vasemmalta löytyvästä lisämateriaalipankista saat apua sekä tilanteen ratkaisemiseen että yleistä tietoa johtamisesta ja esimiestoiminnasta.</li>
               <li>Valittuasi vaihtoehdon pääset palautteeseen, joka määrittyy vastauksesi mukaan.</li>
               <li>Lue palaute huolellisesti.</li>
               <li>Luettuasi palautteen paina Jatka-nappulaa, ja pääset uuteen tilanteeseen eli steppiin.</li>
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
