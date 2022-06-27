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

    console.log(orders)
    return (
        <div className="page">
            <div className="Orders__info">
                <h1>Zamówienia</h1>
                <div className="Orders__info-content">
                    <p>Liczba zamówień: <span>liczba</span></p>
                    <p>Kwota zamówień: <span>liczba</span></p>
                    <p>Sprzedanych produktów: <span>liczba</span></p>
                </div>
            </div>
            <OrdersList orders={orders}/>
        </div>
    )
}