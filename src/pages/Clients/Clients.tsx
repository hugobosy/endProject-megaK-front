import React, {SyntheticEvent, useEffect, useState} from "react";
import './Clients.css';
import {ClientsList} from "../../components/Clients/ClientsList";
import {ClientListHeader} from "../../components/Clients/ClientListHeader";
import {Notification} from "../../components/common/Notification/Notification";
import {AddClient} from "../../components/Clients/AddClient";

export const Clients = () => {

    const [clients, setClients] = useState([]);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [mess, setMess] = useState<string>('');
    const [addClient, setAddClient] = useState<boolean>(false)


    useEffect(() => {
        getClients();
    }, []);

    const closeNotification = () => {
        setTimeout(() => {
            setSuccess(null)
        }, 3000)
    }

    async function getClients(): Promise<void> {
        await fetch('http://localhost:3001/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }

    //todo usun then bo jest await
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
        // @ts-ignore
        const delName = e.currentTarget.parentNode.parentNode.dataset.name
        deleteClient(delItem);
        setMess(`Klient ${delName} został usunięty`)
        setSuccess(false)
        // @ts-ignore
        const newList = clients.filter(client => client.id !== delItem)
        setClients(newList)
        closeNotification()
    }

    const handleBan = (e: SyntheticEvent) => {
        // @ts-ignore
        const banItem = e.currentTarget.parentNode.parentNode.id
        // @ts-ignore
        const banName = e.currentTarget.parentNode.parentNode.dataset.name
        setMess(`Klient ${banName} został zbanowany`)
        setSuccess(false)
        banClient(banItem)
        // @ts-ignore
        e.currentTarget.parentNode.parentNode.classList.add('banned')
        closeNotification()
    }

    const handleAddClient = () => {
        setAddClient(true)
    }

    return (

        <div className="page">
            <div className="Clients__header">
                <h1>Klienci</h1>
                <button onClick={handleAddClient}>Dodaj nowego klienta</button>
            </div>
            <div className="Clients">
                <ClientListHeader/>
                <ClientsList listClient={clients} clickDel={handleDelete} clickBan={handleBan}/>
            </div>
            <Notification msg={mess} succ={success}/>
            <AddClient/>
        </div>
    )
}