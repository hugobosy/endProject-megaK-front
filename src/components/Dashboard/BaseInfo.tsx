import React from "react";
import {Basket, Dollar, User, Wallet} from "@styled-icons/boxicons-regular";

export const BaseInfo = () => {
    return (
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
    )
}