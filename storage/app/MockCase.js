[{
  "name": "mock-case",
  "description": "Matti on jälleen myöhässä.",
  "steps": [
  {
    "id": 1,
    "direction": 0,
    "description": "Matti on tullut töihin puoli tuntia myöhässä. Monesta huomautuksesta huolimatta Matti ei kykene tulemaan töihin sovittuna aikana ja on jatkuvasti väsynyt. Matin myöhästely hidastaa tiimisi työskentelyä ja projektin etenemistä. Miten ratkaiset ongelman?",
    "options": [
      {
        "name": "Pyydä Matti toimistoosi keskustelemaan asiasta.",
        "next_step_id": 2
      },
      {
        "name": "Nuhtele Mattia, mutta älä muute huomioi asiaa.",
        "next_step_id": 3
      },
      {
        "name": "Anna Matille potkut myöhästelystä.",
        "next_step_id": 4
      }
    ],
    "tip_id": 1
  },
  {
    "id": 2,
    "direction": 1,
    "description": "Olet suostutellut Matin toimistoosi ja olette keskustelleet hänen tilanteesta. Matti haluaa jatkaa töissä käymistä, vaikka saisikin isyyspalkkaa ja – lomaa.",
    "options": [
      {
        "name": "Ehdota Matille etätyöskentelyä ja käyntiä yrityksen psykologin vastaanotolla.",
        "next_step_id": 5
      },
      {
        "name": "Anna Matin jatkaa työskentelyä rakennuksessa.",
        "next_step_id": 6
      },
      {
        "name": "Pakota Matti isyyslomalle.",
        "next_step_id": 7
      }
    ]
  },
  {
    "id": 3,
    "direction": 0,
    "description": "Matin myöhästely jatkuu yhä ja muut tiimin jäsenet ovat ottaneet mallia. Projektin eteneminen on hidastunut ja tiimin jäsenet ovat osoittaneet lievää laiskuutta raportoinnin kanssa.",
    "options": [
      {
        "name": "Pidä kokous, jossa selkeytät yrityksen aikataulun ja myöhästelypolitiikan.",
        "next_step_id": 8
      },
      {
        "name": "Anna tiimin työskennellä omien aikataulujen mukaan.",
        "next_step_id": 9
      },
      {
        "name": "Vaadi tiimiltäsi täsmällisyyttä ja tee Matista esimerkki rankaisemalla häntä myöhästelystä.",
        "next_step_id": 10
      }
    ],
    "tip-id": 3
  },
  {
    "id": 4,
    "direction": -1,
    "description": "Annettuasi Matille potkut, Matti ilmaantuu töihin seuraavana aamuna lievässä humalassa. Matti ei ole väkivaltainen, mutta ei suostu lähtemään, vaan vaatii työpaikkansa palauttamista.",
    "options": [
      {
        "name": "Pyydä Mattia lepäämän hetken lepohuoneessa, jotta voit keskustella hänen kanssa alkoholin vaikutuksen lakattua.",
        "next_step_id": 11
      },
      {
        "name": "Kutsu järjestyksenvalvojat paikalle hoitamaan asia.",
        "next_step_id": 12
      },
      {
        "name": "Kutsu poliisit paikalle.",
        "next_step_id": 13
      }
    ]
  },
  {
    "id": 5,
    "direction": 1,
    "description": "Matti on käynyt psykologin vastaanotolla ja aloittanut etätyön. Etätyöskentely on kuitenkin Matille vaikeaa ja hän tekee useita huolimattomuusvirheitä.",
    "options": [
      {
        "name": "Tarjoa Matille verkkokursseja/koulutusta ohjelmiston käyttöön.",
        "next_step_id": 14
      },
      {
        "name": "Kehota Mattia jatkamaan opiskelujaan.",
        "next_step_id": 15
      },
      {
        "name": "Pyydä, että Matti lopettaa etätyöskentelyn ja nauttii lomastaan.",
        "next_step_id": 16
      }
    ]
  },
  {
    "id": 6,
    "direction": 0,
    "description": "Matin työtehokkuus on ollut tasaista viikon aikana, mutta Matti vaikuttaa väsyneeltä. Matti usein torkkuu kahvitauot ja ei näytä syövän lounastakaan. Projektin etenemiseen tämä ei kuitenkaan ole vaikuttanut.",
    "options": [
      {
        "name": "Ehdota Matille lyhennettyä työviikkoa.",
        "next_step_id": 17
      },
      {
        "name": "Lähetä Matti terveydenhoitajan luokse.",
        "next_step_id": 18
      },
      {
        "name": "Anna Matin olla.",
        "next_step_id": 19
      }
    ]
  },
  {
    "id": 7,
    "direction": -1,
    "description": "Matti on valittanut luottohenkilölle pakkolomasta ja luottomies on vuorostaan jakanut päätöksesi liiton ja johtoportaan kanssa. Sinut on pyydetty selittämään päätöksesi johtoportaalle ja liiton edustajalle.",
    "options": [
      {
        "name": "Selitä, että ajattelit Matin parasta. Mies oli väsynyt ja stressaantunut.",
        "next_step_id": 20
      },
      {
        "name": "Ehdota välideadlinen käyttöä, jotta kuukausiraportit saadaan valmiiksi ajoissa.",
        "next_step_id": 21
      },
      {
        "name": "Vaihda vanhaan aikataulujärjestelmään.",
        "next_step_id": 22
      }
    ]
  },
  {
    "id": 8,
    "direction": 1,
    "description": "Kokouksessa muistutat, että deadlinet ovat pitäviä ja myöhästely ei ole suotavaa. Ottaessasi puheenaiheeksi muun aikataulun Matti ehdottaa, että otat käyttöön rennomman aikataulun. Tiimi on samaa mieltä ja ehdottavat eri vaihtoehtoja.",
    "options": [
      {
        "name": "Ehdota äänestystä, jonka jälkeen ehdotat valittua tyyliä johtoportaalle.",
        "next_step_id": 23
      },
      {
        "name": "Anna tiimin päättää, kunhan deadlinesta ei myöhästytä.",
        "next_step_id": 24
      },
      {
        "name": "Ilmaise, ettei aikataulu ole neuvoteltavissa ja siirry seuraavaan asiaa.",
        "next_step_id": 25
      }
    ]
  },
  {
    "id": 9,
    "direction": 0,
    "description": "Tiimisi työskentely ja yhteishenki on kasvanut kohtuullisesti, mutta heidän tuottamat raportit valmistuvat epätasaisesti, joka on aiheuttanut huolta johtoportaassa. Johtoportaan edustajat ilmoittavat, että sinun tiimin on tuotettava kuukausittaisia raportteja ajallaan, tai projekti hylätään.",
    "options": [
      {
        "name": "Ehdota viikoittaista kokousta, jossa viikon tehtävät käydään läpi.",
        "next_step_id": 26
      },
      {
        "name": "Ehdota välideadlinen käyttöä, jotta kuukausiraportit saadaan valmiiksi.",
        "next_step_id": 27
      },
      {
        "name": "Vaihda vanhaan aikataulujärjestelmään.",
        "next_step_id": 28
      }
    ],
    "tag_id": 3
  },
  {
    "id": 10,
    "direction": -1,
    "description": "Projekti on edistynyt suunnitelman mukaan ja tiimin myöhästely on loppunut. Jopa Matti on vähentänyt myöhästelyään. Tehty työ on kuitenkin laadultaan oletettua huonompaa ja työntekijöiden motivaatio tuntuu häilyvän. Johtoporras haluaa laadukkaampaa jälkeä ja painostavat sinua.",
    "options": [
      {
        "name": "Pidä kokous, jossa setvit tehtyä päätöstä ja rankaisua ja yrität korjata tiimin ja sinun välistä suhdetta.",
        "next_step_id": 29
      },
      {
        "name": "Pidä kokous, jossa ilmaiset johtoportaan huolen.",
        "next_step_id": 30
      },
      {
        "name": "Aseta laatutaso, jonka tiimin on täytettävä, ennen kuin heidän tekemä työ hyväksytään.",
        "next_step_id": 31
      }
    ]
  },
  {
    "id": 11,
    "direction": 1,
    "description": "Rauhoituttuaan hetken lepohuoneessa, Matti on selvinnyt humalastaan ja on valmis puhua kanssasi. Matti haluaisi kovasti saada työnsä takaisin ja on pahoillaan jatkuvaa myöhästelyään.",
    "options": [
      {
        "name": "Palkkaa Matti uudelleen.",
        "next_step_id": 32
      },
      {
        "name": "Palkkaa Matti uudelleen, mutta kokeilujaksolla.",
        "next_step_id": 33
      },
      {
        "name": "Älä palkkaa Mattia uudelleen",
        "next_step_id": 34
      }
    ]
  },
  {
    "id": 12,
    "direction": 0,
    "description": "Järjestyksenvalvojat ovat hakeneet Matin pois toimistosta. Matti kuitenkin soittaa seuraavana päivänä HR-Hildalle, joka vuorostaan painostaa sinua selvittämään Matin erotuksen ammattimaisesti.",
    "options": [
      {
        "name": "Selitä Matille henkilökohtaisesti mikä meni vikaan ja miksi.",
        "next_step_id": 35
      },
      {
        "name": "Selitä Hildalle miksi erotit Matin. Hän voi hoitaa selityksen Matille.",
        "next_step_id": 36
      },
      {
        "name": "Pyydä, ettei Hilda häiritse työtäsi hassuttelulla.",
        "next_step_id": 37
      }
    ]
  },
  {
    "id": 13,
    "direction": -1,
    "description": "Poliisit vievät Matin putkaan, etkä kuule hänestä hetkeen. Kahden viikon kuluttua saat kuitenkin kuulla, että Matti on haastanut sinut oikeuteen! Miten lähestyt haastetta?",
    "options": [
      {
        "name": "Yritä sopia tapaus Matin kanssa henkilökohtaisesti.",
        "next_step_id": 38
      },
      {
        "name": "Anna Laurin hoitaa homma kotiin.",
        "next_step_id": 39
      },
      {
        "name": "Vastaa haasteeseen ja vie asia käräjäoikeuden eteen.",
        "next_step_id": 40
      }
    ]
  }]
}]
