import React from "react";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dasboard/Dashboard";
import {Category} from "../../pages/Category/Category";
import {Clients} from "../../pages/Clients";
import {Orders} from "../../pages/Orders/Orders";
import {Products} from "../../pages/Products/Products";
import {Tasks} from "../../pages/Tasks";

export const Routing = () => (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
    </Routes>
)

//todo Must create redirect from '/'