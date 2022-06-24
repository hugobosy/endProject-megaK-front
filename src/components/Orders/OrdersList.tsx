import React from 'react';

export const OrdersList = () => {
    return (
        <div className="Orders">
            <h2>Lista zamówień</h2>
            <div className="Orders__list">
                <div className="Orders__header">
                    <p>Data zakupu</p>
                    <p>Id zakupu</p>
                    <p>Produkty</p>
                    <p>Dane kupującego</p>
                    <p>Liczba produktów</p>
                    <p>Łączna cena</p>
                    <p>Płatność</p>
                </div>
                <div className="Orders__content">
                    <p>24.05.2022</p>
                    <p>1568-45896-56586-5522</p>
                    <div>
                        <p>Adidas r. 42</p>
                        <p>Kurtka Nike Air roz L</p>
                        <p>Kurtka Nike Air roz S</p>
                    </div>
                    <div>
                        <p>Jan Kowalski</p>
                        <p>Armii Krajowej 6/3</p>
                        <p>59-300 Lubin</p>
                    </div>
                    <p>3</p>
                    <p>899zł</p>
                    <p>Zakończona</p>
                </div><div className="Orders__content">
                <p>24.05.2022</p>
                <p>1568-45896-56586-5522</p>
                <div>
                    <p>Adidas r. 42</p>
                    <p>Kurtka Nike Air roz L</p>
                    <p>Kurtka Nike Air roz S</p>
                </div>
                <div>
                    <p>Jan Kowalski</p>
                    <p>Armii Krajowej 6/3</p>
                    <p>59-300 Lubin</p>
                </div>
                <p>3</p>
                <p>899zł</p>
                <p>Zakończona</p>
            </div>
            </div>
            {/*todo tutaj za pomoca map zamówienia z bazy*/}
        </div>
    )
}