import React from "react";

export const PurchaseHistory = () => {
    return (
        <div className="Dashboard__purchase-history">
            <h2>Historia sprzedazy</h2>
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
    )
}