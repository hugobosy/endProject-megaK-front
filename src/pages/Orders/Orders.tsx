import React, {useEffect, useState} from "react";
import './Orders.css';
import {OrdersList} from "../../components/Orders/OrdersList";
import {Order} from "types";
import {AddOrder} from "../../components/Orders/AddOrder";

export const Orders = () => {

    const [orders, setOrders] = useState<Order[]>([]);
    const [simulator, setSimulator] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/orders');
            const data = res.json();
            setOrders(await data);
        })()
    }, [])

    const sumPrice = orders.map(order => order.total).reduce((prev, curr) => prev + curr, 0)
    const sumCount = orders.map(order => order.count).reduce((prev, curr) => prev + curr, 0)

    // const date = orders.map(order => new Date(order.date).getTime()).sort((a,b) => b - a);

    const handleSimulator = () => {
        setSimulator(true);
    }

    console.log(orders)

    return (
        <div className="page">
            <div className="Orders__info">
                <h1>Zamówienia</h1>
                <button onClick={handleSimulator}>Symuluj zamówienie</button>
                <div className="Orders__info-content">
                    <p>Liczba zamówień: <span>{orders.length}</span></p>
                    <p>Kwota zamówień: <span>{sumPrice.toFixed(2)}</span></p>
                    <p>Sprzedanych produktów: <span>{sumCount}</span></p>
                </div>
            </div>
            <OrdersList orders={orders}/>
            {simulator ? <AddOrder close={setSimulator}/> : null}
        </div>
    )
}