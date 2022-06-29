import React from "react";

export const LatestSell = () => {
    return (
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
    )
}