import React from "react";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard";
import {Category} from "../../pages/Category";
import {Clients} from "../../pages/Clients";
import {Orders} from "../../pages/Orders";
import {Products} from "../../pages/Products";

export const Routing = () => (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/products' element={<Products/>}/>
    </Routes>
)
