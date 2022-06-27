import React from 'react';
import {Order} from "types";

interface Props {
    orders: Order[],
}

export const OrdersList = (props: Props) => {

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
                {props.orders.map(order => (
                    <div className="Orders__content" key={order.id}>
                        <p>{order.date}</p>
                        <p>{order.id}</p>
                        <div>
                            {order.products.split(', ').map(item => <p key={item}>{item}</p>)}
                        </div>
                        <div>
                            <p>Jan Kowalski</p>
                            <p>Armii Krajowej 6/3</p>
                            <p>59-300 Lubin</p>
                        </div>
                        <p>{order.count}</p>
                        <p>{order.total}</p>
                        <p>{order.payment ? 'Zakończona' : 'W trakcie'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}