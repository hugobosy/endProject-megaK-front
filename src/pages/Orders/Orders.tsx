import React, {useEffect, useState} from "react";
import './Orders.css';
import {OrdersList} from "../../components/Orders/OrdersList";
import {Order} from "types";
import {AddOrder} from "../../components/Orders/AddOrder";

export const Orders = () => {

    const [orders, setOrders] = useState<Order[]>([]);
    const [simulator, setSimulator] = useState(false);
    const [search, setSearch] = useState<Order[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/orders');
            const data = res.json();
            setOrders(await data);
        })()
    }, [])

    const sumPrice = orders.map(order => order.total).reduce((prev, curr) => prev + curr, 0)
    const sumCount = orders.map(order => order.count).reduce((prev, curr) => prev + curr, 0)

    const handleSimulator = () => {
        setSimulator(true);
    }

    const handleSearch = (e: string) => {
        setSearch([...orders].filter(order => order.client.includes(e) || order.id.includes(e) || order.products.includes(e)).map(order => order))
    }

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
            <OrdersList orders={orders} handleSearch={handleSearch} search={search}/>
            {simulator ? <AddOrder close={setSimulator}/> : null}
        </div>
    )
}