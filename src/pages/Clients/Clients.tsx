import React, {SyntheticEvent, useEffect, useState} from "react";
import './Clients.css';
import {ClientsList} from "../../components/Clients/ClientsList";
import {ClientListHeader} from "../../components/Clients/ClientListHeader";

export const Clients = () => {

    const [clients, setClients] = useState([]);


    useEffect(() => {
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

    const banClient = async (item: string) => {
        try {
            await fetch(`http://localhost:3001/clients/ban/${item}`, {
                    method: 'PATCH',
                    body: JSON.stringify({item}),
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
        } catch (e) {
            console.log('Error', e)
        }
    }

    const handleDelete = (e: SyntheticEvent) => {
        // @ts-ignore
        const delItem = e.currentTarget.parentNode.parentNode.id
        deleteClient(delItem);
        // @ts-ignore
        const newList = clients.filter(client => client.id !== delItem)
        setClients(newList)
    }

    const handleBan = (e: SyntheticEvent) => {
        // @ts-ignore
        const banItem = e.currentTarget.parentNode.parentNode.id
        console.log(banItem)
        banClient(banItem)
        // @ts-ignore
        clients.map(client => client.id === banItem)
    }

    return (

        <div className="page">
            <h1>Klienci</h1>
            <div className="Clients">
                <ClientListHeader/>
                <ClientsList listClient={clients} clickDel={handleDelete} clickBan={handleBan}/>
            </div>
        </div>
    )
}