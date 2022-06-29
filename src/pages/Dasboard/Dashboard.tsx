import React, {useEffect, useState} from "react";
import './Dasboard.css';
import {BaseInfo} from "../../components/Dashboard/BaseInfo";
import {LatestSell} from "../../components/Dashboard/LatestSell";
import {PurchaseHistory} from "../../components/Dashboard/PurchaseHistory";
import {ClientType, Order} from "types";

export const Dashboard = () => {

    const [users, setUsers] = useState<ClientType[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);

    const getData = async() => {
        const res = await fetch('http://localhost:3001');
        const data = await res.json();
        setUsers(await data.users);
        setOrders(await data.orders);
    }

    useEffect(()=> {
        getData();
    }, [])

    return (
        <div className="page">
            <h1>Dashboard</h1>

            <BaseInfo users={users} orders={orders}/>
            <LatestSell/>
            <PurchaseHistory/>
        </div>
    )
}