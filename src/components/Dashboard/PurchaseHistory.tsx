import React from "react";
import {Order} from "types";

interface Props {
    orders: Order[]
}

export const PurchaseHistory = (props: Props) => {
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
            {props.orders.map(order => (
                <div className="Dashboard__purchase-item">
                    <span>{order.id}</span>
                    <div>
                        {order.products.split(', ').map(item => <p>{item}</p>)}
                    </div>
                    <div>
                        {order.client.split(', ').map(item => <p>{item}</p>)}
                    </div>
                    <span>{order.total}</span>
                    <span>{order.payment ? 'Opłacone' : 'W trakcie'}</span>
                </div>
            ))}

        </div>
    )
}