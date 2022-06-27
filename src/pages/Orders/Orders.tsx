import React, {useEffect, useState} from "react";
import './Orders.css';
import {OrdersList} from "../../components/Orders/OrdersList";
import {Order} from "types";

export const Orders = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(()=> {
        (async() => {
            const res = await fetch('http://localhost:3001/orders');
            const data = res.json();
            setOrders(await data);
        })()
    }, [])

    const sumPrice = orders.map(order => order.total).reduce((prev,curr) => prev+curr, 0)
    const sumCount = orders.map(order => order.count).reduce((prev,curr) => prev+curr, 0)

    return (
        <div className="page">
            <div className="Orders__info">
                <h1>Zamówienia</h1>
                <button>Symuluj zamówienie</button>
                <div className="Orders__info-content">
                    <p>Liczba zamówień: <span>{orders.length}</span></p>
                    <p>Kwota zamówień: <span>{sumPrice.toFixed(2)}</span></p>
                    <p>Sprzedanych produktów: <span>{sumCount}</span></p>
                </div>
            </div>
            <OrdersList orders={orders}/>
        </div>
    )
}