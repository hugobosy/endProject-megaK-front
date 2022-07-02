# Projekt zaliczeniowy do kursu MegaK

`React.js` `Express.js` `MySQL` `HTML` `CSS` `TypeScript`

## Panel administracyjny hipotetycznego sklepu internetowego

1. [Wstęp](#Wstęp)
2. [Uruchomienie programu](#uruchomienie-programu)
3. [Wykorzystane technologie](#wykorzystane-technologie--paczki--jezyki-programowania)
4. [Opis działania programu](#opis-dzialania-programu)
    - [Dashboard](##dashboard)
    - [Produkty](##produkty)
    - [Zamówienia](##Zamówienia)
    - [Kategorie](##Kategorie)
    - [Klienci](##Klienci)
5. [Rozwój](#rozwj)

# Wstęp

### Mój pierwszy większy projekt full stack. Projekt ma symulować panel administracyjny sklepu internetowego. Można dodawać nowe produkty do bazy, można symulować zamówienia, dodawać klientów i tworzyć kategorie. Projekt jest w podstawowej wersji działania i bedzie rozwijany o kolejne funkcje.

# Uruchomienie programu

Najpierw ściągnij pliki lub sklonuj zdalne repozytorium na swój lokalny
dysk. [Tutaj](https://github.com/hugobosy/endProject-megaK-back) jest repozytorium do back-end, który też musisz pobrać.

## Ważne !

_Folder, w którym znajdują się pliki z back-endu musi mieć nazwę `back-end` !_

Po ściągnięciu plików wpisz w terminalu to polecenie:
> `npm install`

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

# Wykorzystane technologie / paczki / jezyki programowania

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

# Opis dzialania programu

## Dashboard

![Dashboard](./images/dashboard.png)
![Dashboard](./images/dashboard2.png)

> 1. Z lewej strony mamy menu, które możemy zamykać i otwierać klikając na kłódkę u góry.
> 2. __Logo tworzone na podstawie loga kursu. Wszelkie prawa zastrzeżone__
> 3. W dashboardzie mamy podsumowanie zamówień, ilość klientów, jakie produkty się najlepiej sprzedają, oraz listę zamówień

## Produkty

![Products](./images/products.png)

> 1. W zakładce produkty widzimy listę produktów jakie są w bazie
> 2. Zdjęcia produktów są wstawiane do bazy w formie odnośników do obrazków
> 3. Gdy brakuje towaru na naszym "magazynie" wtedy opis jest na czerwonym tle i wyświetla się dodatkowy przycisk do zamówienia tego towaru
> 4. Są tez przyciski do edycji oraz usuwania produktu
> 5. Mozna sortować produkty po wybranych opcjach oraz wyszukać produkt

#### Dodawanie produktu
![addProduct](./images/addProduct.png)

> 1. Po kliknięciu w przycisk Dodaj produkt wyskoczy nam takie okienko
> 2. Musimy wypełnić kazde pole inaczej wyświetli się nam stosowna informacja (w czasie tworzenia readme walidacja formularza jeszcze nie jest wprowadzona!)
> 3. Po dodaniu produktu wyświetli się informacja ze produkt został dodany do bazy oraz po zniknięciu informacji strona zostanie przeładowana.

![greenInfo](./images/greenInfo.png)

#### Edycja produktu
![editProduct](./images/editProduct.png)

> 1. Po kliknięciu Edytuj pojawi się okienko takie same jak dodawanie produktu, z tym że pewne informacje takie jak opis czy link do zdjęcia pozostaną wyświetlone w placeholder. W przyszłości zostanie to zmienione na zwykły tekst do edycji, bo w tej wersji musimy na nowo wprowadzać wszystkie dane.

## Zamówienia
![orders](./images/orders.png)

> 1. Strona zamówienia posiada listę wszystkich zamówień
> 2. Po prawej stronie mamy podsumowanie liczby zamówień, łączną kwotę oraz ile sprzedaliśmy produktów
> 3. NA środku jest przycisk gdzie mozemy zasymulować zakupy

![simulate](./images/sim.png)

> 1. Po kliknięciu Symuluj zamówienie wyskoczy okienko z listą produktów z wyborem klienta i zatwierdzenia symulacji
> 2. Przy wyborze produktu na dole będzie wyświetlana lista
> 3. Musimy wybrać klilenta by móc wykonać symulację
> 4. Gdy będziemy chcieli dodać do ten sam produkt dwa razy wyświetli się nam informacja o tym ze produkt juz istnieje na liście (tutaj będą wprowadzane poprawki by "koszyk" działał w pełni prawidłowo)
> 5. Gdy któregoś produktu nie ma "na stanie" wtedy nie będzie wyświetlany na liście produktów w symulacji

## Kategorie

