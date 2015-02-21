<!DOCTYPE html>
<html lang="fi">
<head>
  <title>Työelämäsimulaattori KOKEILU</title>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
  <div id="index-view" class="modal">
    <div class="modal__dialog">
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

      <div class="modal__footer">
        <p>Ennen kuin aloitat simulaattorin, varmista, että sinulla on oma DiSC - profiili, sillä tulet tarvitsemaan sitä simulaatiossa.</p>
        <a href="/disc" class="btn btn--primary">Aloita simulaatio</a href="">
      </div>

    </div>
  </div>

  <div id="disc-view" class="modal">
    <div class="modal__dialog">
      <h1>DiSC-tyypin valinta</h1>
      <p class="subtitle">Lorem ipsum Eu proident magna deserunt nisi est proident cillum fugiat anim aute labore enim veniam Excepteur do id.</p>
      <div class="row">
        <div class="column column1-5">
          <div class="disc-selector">
            <label>DiSC-tyypit</label>
            <input type="text" />
            <select>
              <option>CC</option>
              <option>DC</option>
              <option>AC</option>
              <option>QC</option>
              <option>DE</option>
              <option>ÅÅ</option>
            </select>
          </div>

        </div>
        <div class="column column4-5">
          <h2>Olet CC - tyyppi</h2>
          <p>
            Lorem ipsum Velit non cillum consectetur et aliquip sint sed voluptate ut aliquip consequat tempor commodo amet anim eiusmod sit ut voluptate nulla occaecat irure Ut nostrud dolore Excepteur occaecat laborum reprehenderit amet magna velit nulla et ut aute in dolore.
            Lorem ipsum Velit non cillum consectetur et aliquip sint sed voluptate ut aliquip consequat tempor commodo amet anim eiusmod sit ut voluptate nulla occaecat irure Ut nostrud dolore Excepteur occaecat laborum reprehenderit amet magna velit nulla et ut aute in dolore.
          </p>

          <p> Tämä on vain yleiskuvaus profiilista, eikä välttämättä kuvaa sinua. Katso tarkennusta tyyppiisi DiSC - materiaaleistasi(?) </p>
        </div>
      </div>

      <div class="modal__footer">
        <a href="/disc" class="btn btn--primary">Valitse ja jatka</a href="">
      </div>
    </div>
  </div>

  <script type="text/javascript" src="js/main.js"></script>
</body>
</html>
