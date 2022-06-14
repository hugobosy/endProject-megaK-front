import React from "react";
import {Basket, Dollar, User, Wallet} from "@styled-icons/boxicons-regular";
import './Dasboard.css';

export const Dashboard = () => {
    return (
        <div className="page">
            <h1>Dashboard</h1>

            <div className="Dashboard__base-info">
                <div className="Dashboard__base-item">
                    <span className="Dashboard__base-icon"><Basket size="30"/></span>
                    <div className="Dashboard__base-content">
                        <p>Ilość zamówień</p>
                        <p>(liczba zamówień)</p>
                        <p>Data ostatniego zamówienia</p>
                    </div>
                </div>
                <div className="Dashboard__base-item">
                    <span className="Dashboard__base-icon"><Dollar size="30"/></span>
                    <div className="Dashboard__base-content">
                        <p>Całkowity przychód</p>
                        <p>(liczba przychodu)</p>
                        <p>Przychód z ostatniego zamówienia</p>
                    </div>
                </div>
                <div className="Dashboard__base-item">
                    <span className="Dashboard__base-icon"><Wallet size="30"/></span>
                    <div className="Dashboard__base-content">
                        <p>Koszty</p>
                        <p>(liczba kosztów)</p>
                        <p>Nadchodzące płatności</p>
                    </div>
                </div>
                <div className="Dashboard__base-item">
                    <span className="Dashboard__base-icon"><User size="30"/></span>
                    <div className="Dashboard__base-content">
                        <p>Najnowsi użytkownicy</p>
                        <p>(ilość uzytkowników)</p>
                        <p>Ostatnio zarejestrowany uzytkownik</p>
                    </div>
                    {/*todo tutaj wczytywanie danych z bazy */}
                </div>
            </div>

            <div className="Dashboard__latest-sell">
                <h2>Najlepiej sprzedajace się produkty</h2>
                <div className="Dashboard__latest-item">
                    <p>Photo</p>
                    <p>Id produktu</p>
                    <p>Nazwa produktu</p>
                    <p>Cena</p>
                    <p>Stan</p>
                </div>
                <div className="Dashboard__latest-item">
                    <img
                        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/78e78695-74ab-4162-b052-67f004aad13b/buty-do-golfa-air-max-270-g-3GkJ0N.png"
                        alt="But"/>
                    <span>354685-235465-126-156146</span>
                    <span>Buty Nike Air90</span>
                    <span>699zł</span>
                    <span>3</span>
                    {/*//todo Tutaj musi być wczytywanie z bazy danych za pomocą map*/}
                </div>
                <div className="Dashboard__latest-item">
                    <img
                        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/78e78695-74ab-4162-b052-67f004aad13b/buty-do-golfa-air-max-270-g-3GkJ0N.png"
                        alt="But"/>
                    <span>354685-235465-126-156146</span>
                    <span>Buty Nike Air90</span>
                    <span>699zł</span>
                    <span>3</span>
                </div>
            </div>

            <div className="Dashboard__purchase-history">
                <h2>Historia zakupów</h2>
                <div className="Dashboard__purchase-item">
                    <p>Id zakupu</p>
                    <p>Produkty</p>
                    <p>Dane kupującego</p>
                    <p>Łączna cena</p>
                    <p>Płatność</p>
                </div>
                <div className="Dashboard__purchase-item">
                    <span>354685-235465-126-156146</span>
                    <div>
                        <p>Buty Nike Air90 <span>699zł</span></p>
                        <p>Buty Nike Air90 <span>699zł</span></p>
                        <p>Buty Nike Air90 <span>699zł</span></p>
                    </div>
                    <div>
                        <span>Jan Kowalski</span>
                        <span>Ćwiartki 3/4</span>
                        <span>00-000 Warszawa</span>
                    </div>
                    <span>2097 zł</span>
                    <span>w trakcie</span>
                    {/*//todo Tutaj musi być wczytywanie z bazy danych za pomocą map*/}
                </div>
                <div className="Dashboard__purchase-item">
                    <span>354685-235465-126-156146</span>
                    <div>
                        <p>Buty Nike Air90 <span>699zł</span></p>
                        <p>Buty Nike Air90 <span>699zł</span></p>
                        <p>Buty Nike Air90 <span>699zł</span></p>
                    </div>
                    <div>
                        <span>Jan Kowalski</span>
                        <span>Ćwiartki 3/4</span>
                        <span>00-000 Warszawa</span>
                    </div>
                    <span>2097 zł</span>
                    <span>w trakcie</span>
                    {/*//todo Tutaj musi być wczytywanie z bazy danych za pomocą map*/}
                </div>
            </div>
        </div>
    )
}