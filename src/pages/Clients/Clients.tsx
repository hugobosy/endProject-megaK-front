import React from "react";
import './Clients.css';
import {User} from "@styled-icons/boxicons-regular";
import {Hand, Trash} from "@styled-icons/boxicons-solid";

export const Clients = () => {
    return (
        <div className="page">
            <h1>Klienci</h1>
            <div className="Clients">
                <div className="Clients__header">
                    <p><User size="25"/></p>
                    <p>Imię</p>
                    <p>Nazwisko</p>
                    <p>Adres</p>
                    <p>Telefon</p>
                    <p>Płeć</p>
                    <p>Data urodzenia</p>
                    <p>E-mail</p>
                    <p>Akcja</p>
                </div>
                <div className="Clients__item">
                    <p><User size="25"/></p>
                    <p>Hubert</p>
                    <p>Kliszcz</p>
                    <p>Armii Krajowej 6/3 <br/> 59-300 Lubin</p>
                    <p>608172153</p>
                    <p>Mezczyzna</p>
                    <p>24.10.1987</p>
                    <p>hkliszcz@gmail.com</p>
                    <p><Trash size="25" color="red" style={{cursor: 'pointer'}}/><Hand size="25" color="red" style={{cursor: 'pointer'}}/></p>
                </div>
                <div className="Clients__item">
                    <p><User size="25"/></p>
                    <p>Hubert</p>
                    <p>Kliszcz</p>
                    <p>Armii Krajowej 6/3 <br/> 59-300 Lubin</p>
                    <p>608172153</p>
                    <p>Mezczyzna</p>
                    <p>24.10.1987</p>
                    <p>hkliszcz@gmail.com</p>
                    <p><Trash size="25" color="red" style={{cursor: 'pointer'}}/><Hand size="25" color="red" style={{cursor: 'pointer'}}/></p>
                </div>
            {/*    todo map z bazy*/}
            </div>
        </div>
    )
}