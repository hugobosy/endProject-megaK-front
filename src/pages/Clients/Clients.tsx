import React, {SyntheticEvent, useEffect, useState} from "react";
import './Clients.css';
import {ClientsList} from "../../components/Clients/ClientsList";

export const Clients = () => {

    const [clients, setClients] = useState([]);



    useEffect(()=> {
        getClients();
    }, []);

    async function getClients(): Promise<void> {
        await fetch('http://localhost:3001/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }

    const deleteClient = async (item: string) => {
        try {
            await fetch(`http://localhost:3001/clients/delete/${item}`, {
                method: 'POST',
                body: JSON.stringify({item}),
                headers: {
                    'Content-type': 'application/json',
                },
            })
        } catch (e) {
            console.log('Error', e)
        }
    }

    const handleDelete = (e:SyntheticEvent) => {
        // @ts-ignore
        const delItem = e.currentTarget.parentNode.parentNode.id
        deleteClient(delItem);
    }

    return (

        <div className="page">
            <h1>Klienci</h1>
            <div className="Clients">
                <div className="Clients__header">
                    <p>Imię</p>
                    <p>Nazwisko</p>
                    <p>Adres</p>
                    <p>Telefon</p>
                    <p>Płeć</p>
                    <p>Data urodzenia</p>
                    <p>E-mail</p>
                    <p>Akcja</p>
                </div>
                <ClientsList listClient={clients} click={handleDelete}/>
            </div>
        </div>
    )
}