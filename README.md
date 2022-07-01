# Projekt zaliczeniowy do kursu MegaK

`React.js` `Express.js` `MySQL` `HTML` `CSS` `TypeScript`

## Panel administracyjny hipotetycznego sklepu internetowego

1. [Wstęp](#Wstęp)
2. [Uruchomienie programu](#start)
3. [Wykorzystane technologie](#Wykorzystane)
4. [Opis działania programu](#Opis)
    - [Dashboard](#Dashboard)
    - [Produkty](#Produkty)
    - [Zamówienia](#Zamówienia)
    - [Kategorie](#Kategorie)
    - [Klienci](#Klienci)
5. [Rozwój](#Rozwój)

# Wstęp

### Mój pierwszy większy projekt full stack. Projekt ma symulować panel administracyjny sklepu internetowego. Można dodawać nowe produkty do bazy, można symulować zamówienia, dodawać klientów i tworzyć kategorie. Projekt jest w podstawowej wersji działania i bedzie rozwijany o kolejne funkcje.

# Uruchomienie programu

Najpierw ściągnij pliki lub sklonuj zdalne repozytorium na swój lokalny
dysk. [Tutaj](https://github.com/hugobosy/endProject-megaK-back) jest repozytorium do back-end, który też musisz pobrać.

## Ważne !

_Folder, w którym znajdują się pliki z back-endu musi mieć nazwę `back-end` !_

Po ściągnięciu plików wpisz w terminalu to polecenie:
> npm install

Wykonaj to polecenie osobno w folderze z front-end'em i osobno z back-end'em

W folderze z back-endem jest folder `dataDB` a w nim plik z cała bazą sql. Aby program działał poprawnie musisz
zaimportować plik do swojej bazy lokalnej

W pliku `db.ts` jest konfiguracja połaczenia się z bazą danych:

```
import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'mega_shop',
    namedPlaceholders: true,
    decimalNumbers: true,
})
```

Jeżeli masz inne dane, musisz je edytować w ten sposób, aby odpowiadały Twojej bazie!

Zrobione! :smiley:

# Wykorzystane technologie / paczki / języki programowania

| Technologia, paczka, język programowania |           Opis            |  Wersja                |
|:---                                      |:-------------------------:|-----------------------:|
|HTML                                     |     Struktura strony      | 5|
|CSS| Stylizacja wyglądu strony |3|
|JavaScript|    język programowania    |ES6+|
|TypeScript|       Nadbudówka JS       |4.7.3|
|React|       Framework JS        |18|
|react-router-dom| Routing|6.3|
|UUID|Generator unikalnych ID|8.3.2|
|@styled-icons/boxicons-(typ)| Ikony |10.38|

# Opis działania programu