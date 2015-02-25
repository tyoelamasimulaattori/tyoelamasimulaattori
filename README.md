## Työelämäsimulaattori

[ ![Codeship Status for rikukissa/tyoelamasimulaattori](https://codeship.com/projects/8a6f5bc0-92b6-0132-6084-66933f4492d6/status?branch=master)](https://codeship.com/projects/61972)

#### Asentaminen
Riippuvuuksien asentaminen
```
$ composer install
```

Luo tiedosto `.env` projektihakemiston juureen jonka sisällöksi seuraava:
```
APP_ENV=local
APP_DEBUG=true
APP_KEY=[SATUNNAISIA MERKKEJÄ TÄHÄN]

DB_HOST=localhost
DB_DATABASE=tyoelamasimulaattori
DB_USERNAME=dev
DB_PASSWORD=dev

CACHE_DRIVER=file
SESSION_DRIVER=file
```

Tietokannan luominen (*komentoriviltä*):
```
$ mysql -u root
mysql> CREATE USER dev IDENTIFIED BY 'dev';
mysql> CREATE DATABASE tyoelamasimulaattori CHARACTER SET UTF8;
mysql> GRANT ALL PRIVILEGES ON tyoelamasimulaattori.* TO 'dev'@'localhost' IDENTIFIED BY 'dev';
```
Tietokannan skeemojen luominen:
```
$ php artisan migrate
```

## Fronttityökalujen asentaminen
Projektissa on nyt käytössä [Stylus](http://learnboost.github.io/stylus/) CSS-preprosessorina ja [Browserify](http://browserify.org/) mahdollistamassa mm. `require()` funktion käytön selainkoodissa. Näistä molemmat täytyy kääntää ennen kuin selain ymmärtää niistä mitään eli `.styl` tiedostot käännetään `resources/styles` hakemistosta `public/css` hakemistoon ja `.js` tiedostot `resources/js` hakemistosta `public/js` hakemistoon.

Taustalla pyörivä [Gulp](https://github.com/gulpjs/gulp) kääntää näitä tiedostoja automaattisesti aina kun joku niistä muuttuu, eikä siitä tarvitse erikseen huolehtia.

# 1.  Asenna [Node.js](http://nodejs.org/)

* **Windows**
    * Etusivulta **Install**, lataa asennuspaketti ja asenna se.
* **OSX/Linux**
    * Lataa NVM https://github.com/creationix/nvm#install-script
    * `$ nvm install 0.12`

Komentoriviltä pitäisi löytyä nyt komennot `node` ja `npm`

# 2. Asenna projektin JavaScript-riippuvuudet
* Aja projektihakemistossa `$ npm install`

#3. Käynnistä [Gulp](https://github.com/gulpjs/gulp)
* `npm start`

**Kaikki tiedostot kääntyy nyt automaattisesti ja voit alkaa koodaamaan. Asenna vielä Chromeen [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) - plugin niin saat selaimen reloadaamaan aina uuden käännöksen valmistuessa.**

## Palvelimen ajaminen PHP:n omalla kehityspalvelimella
`$ php -S localhost:8080`

---

## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/downloads.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

