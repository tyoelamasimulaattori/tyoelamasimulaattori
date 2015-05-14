## Frontend koodin rakenne ja koodauskäytännöt

Käyttöliittymä koostuu [React](https://github.com/facebook/react)-komponenteista ja itse applikaatiologiikka on toteutettu käyttäen [Flux](https://facebook.github.io/flux/) - arkkitehtuuria. Käytännössä arkkitehtuurin ideoita toteutetaan [Reflux](https://github.com/spoike/refluxjs) - kirjaston avulla.

Kaikki storet ja actionit ovat koottu omiin tiedostoihinsa tähän *resources/* hakemiston juureen. Tulevaisuudessa näitä tiedostoja olisi hyvä paloitella pienemmiksi osiksi mikäli uusia storeja tai actioneita luodaan.


### Hakemistorakenne
* **assets/** - Kuvat ja muut staattiset resurssit
    * Hakemiston sisältö [kopioidaan](https://github.com/tyoelamasimulaattori/tyoelamasimulaattori/blob/master/gulpfile.js#L82-L84) suoraan *public/* hakemiston juureen
* **components/** - Käyttöliittymäkomponentit
    * Kokoelma "tyhmiä" komponentteja joista *views/* hakemistossa olevat näkymät koostetaan. Kaikkien täällä olevien komponenttien tulisi mahdollisuuksien mukaan olla täysin yleiskäyttöisiä eikä mitenkään juuri tästä applikaatiosta riippuvaisia.
        * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
    * [Käyttöliittymäkomponenttien luominen](https://github.com/tyoelamasimulaattori/tyoelamasimulaattori/blob/master/resources/components/README.md)
* **js/** - Applikaatiokoodin "lähtöpiste" ja käyttöliittymän reitittimen määritykset
* **styles/** - Applikaation yleiset tyylit ja tyylimuuttujat. Komponenttikohtaiset tyylit löytyy jokaisen komponentin omasta hakemistosta.
* **test-utils/** - Käyttöliittymätestauksen apufunktiot
* **views/** - Näkymäkomponentit
    * Applikaation eri näkymät jotka koostuvat monesta käyttöliittymäkomponentista
    * Näkymät voivat olla riippuvaisia muusta applikaation logiikasta, kutsuvat actioneita ja lukevat dataa storeista
    * [Näkymäkomponenttien luominen](https://github.com/tyoelamasimulaattori/tyoelamasimulaattori/blob/master/resources/views/README.md)
* **stores.js** - Säilytyspaikat applikaation tilaa varten
* **actions.js** - Applikaation logiikka
* **filters.js** - Filtterit näkymää varten joilla datasta muutetaan oikeaan muotoon näkymää varten


