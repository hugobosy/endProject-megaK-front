import {Basket, Category, Dashboard, ShoppingBag, User} from "@styled-icons/boxicons-solid";
import {Task} from "@styled-icons/boxicons-regular";
import {ReactElement} from "react";

interface Links {
    link: string,
    name: string,
    icon: ReactElement,
}

export const menuLinks:Links[] = [
    {
        link: 'dashboard',
        name: 'Dashboard',
        icon: <Dashboard/>,
    },
    {
        link: 'products',
        name: 'Produkty',
        icon: <ShoppingBag/>,
    },
    {
        link: 'orders',
        name: 'Zamówienia',
        icon: <Basket/>,
    },
    {
        link: 'category',
        name: 'Kategorie',
        icon: <Category/>,
    },
    {
        link: 'clients',
        name: 'Klienci',
        icon: <User/>,
    },
    {
        link: 'tasks',
        name: 'Zadania',
        icon: <Task/>,
    },
]