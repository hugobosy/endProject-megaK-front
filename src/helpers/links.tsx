import {Dashboard} from "@styled-icons/boxicons-solid";
import {Task, Basket, Category, ShoppingBag, User} from "@styled-icons/boxicons-regular";
import {ReactElement} from "react";
import '../components/Menu/Menu.css';

interface Links {
    link: string,
    name: string,
    icon: ReactElement,
}

const size:number = 30

export const menuLinks:Links[] = [
    {
        link: '',
        name: 'Dashboard',
        icon: <Dashboard size={size} className='Menu__icon'/>,
    },
    {
        link: 'products',
        name: 'Produkty',
        icon: <ShoppingBag size={size} className='Menu__icon'/>,
    },
    {
        link: 'orders',
        name: 'Zamówienia',
        icon: <Basket size={size} className='Menu__icon'/>,
    },
    {
        link: 'category',
        name: 'Kategorie',
        icon: <Category size={size} className='Menu__icon'/>,
    },
    {
        link: 'clients',
        name: 'Klienci',
        icon: <User size={size} className='Menu__icon'/>,
    },
    {
        link: 'tasks',
        name: 'Zadania',
        icon: <Task size={size} className='Menu__icon'/>,
    },
]