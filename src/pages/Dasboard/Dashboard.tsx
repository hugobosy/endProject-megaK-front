import React from "react";
import './Dasboard.css';
import {BaseInfo} from "../../components/Dashboard/BaseInfo";
import {LatestSell} from "../../components/Dashboard/LatestSell";
import {PurchaseHistory} from "../../components/Dashboard/PurchaseHistory";

export const Dashboard = () => {
    return (
        <div className="page">
            <h1>Dashboard</h1>

            <BaseInfo/>
            <LatestSell/>
            <PurchaseHistory/>
        </div>
    )
}