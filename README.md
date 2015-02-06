## Työelämäsimulaattori

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

