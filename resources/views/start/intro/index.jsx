var React = require('react');

var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div id="index-view" className="modal">
        <div className="modal__dialog">
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

          <div className="modal__footer">
            <p>Ennen kuin aloitat simulaattorin, varmista, että sinulla on oma DiSC - profiili, sillä tulet tarvitsemaan sitä simulaatiossa.</p>

            <Link to="disc" className="btn btn--primary">
              Aloita simulaatio
            </Link>
          </div>

        </div>
      </div>
    );
  }
})