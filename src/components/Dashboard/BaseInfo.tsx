import React from "react";
import {Basket, Dollar, User, Wallet} from "@styled-icons/boxicons-regular";
import {ClientType, Order} from "types";

interface Props {
    users: ClientType[],
    orders: Order[],
}



export const BaseInfo = (props: Props) => {

    const lastOrder = props.orders.map(order => order.date);
    const lastComingCash = props.orders.map(order => order.total);
    const lastVat = props.orders.map(order => (23 / 123 * order.total).toFixed(2));
    const totalCash = props.orders.map(order => order.total).reduce((prev, curr) => prev + curr, 0);
    const totalVat = props.orders.map(order => 23 / 123 * order.total).reduce((prev, curr) => prev + curr, 0);

    console.log(props.orders)


    return (
        <div className="Dashboard__base-info">
            <div className="Dashboard__base-item">
                <span className="Dashboard__base-icon"><Basket size="30"/></span>
                <div className="Dashboard__base-content">
                    <p>Ilość zamówień</p>
                    <p>{props.orders.length}</p>
                    <p>Ostatnie zamówienie: {`${lastOrder[0]}`}</p>
                </div>
            </div>
            <div className="Dashboard__base-item">
                <span className="Dashboard__base-icon"><Dollar size="30"/></span>
                <div className="Dashboard__base-content">
                    <p>Całkowity przychód</p>
                    <p>{totalCash} zł</p>
                    <p>Przychód z ostatniego zamówienia: {lastComingCash[0]} zł</p>
                </div>
            </div>
            <div className="Dashboard__base-item">
                <span className="Dashboard__base-icon"><Wallet size="30"/></span>
                <div className="Dashboard__base-content">
                    <p>Podatek VAT do zapłacenia</p>
                    <p>{totalVat.toFixed(2)} zł</p>
                    <p>Podatek VAT z ostatniego zamówienia: {`${lastVat[0]}`} zł</p>
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