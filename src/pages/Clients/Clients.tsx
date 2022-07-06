import React, {SyntheticEvent, useEffect, useState} from "react";
import './Clients.css';
import {ClientsList} from "../../components/Clients/ClientsList";
import {ClientListHeader} from "../../components/Clients/ClientListHeader";
import {Notification} from "../../components/common/Notification/Notification";
import {AddClient} from "../../components/Clients/AddClient";
import {ClientType} from "types";

export const Clients = () => {

    const [clients, setClients] = useState<ClientType[]>([]);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [mess, setMess] = useState<string>('');
    const [addClient, setAddClient] = useState<boolean>(false)
    const [search, setSearch] = useState<ClientType[]>([]);


    useEffect(() => {
        getClients();
    }, []);

    const closeNotification = () => {
        setTimeout(() => {
            setSuccess(null)
        }, 3000)
    }

    async function getClients(): Promise<void> {
        const res = await fetch('http://localhost:3001/clients')
        const data = await res.json();
        setClients(await data)
    }

    const handleSearch = (e: string) => {
        setSearch([...clients].filter(client => client.name.includes(e) || client.surname.includes(e) || client.email.includes(e)).map(order => order))
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
        // @ts-ignore
        const delName = e.currentTarget.parentNode.parentNode.dataset.name

        if(window.confirm(`Czy na pewno chcesz usunąć uzytkownika ${delName} ?`)) {
            deleteClient(delItem);
            setMess(`Klient ${delName} został usunięty`)
            setSuccess(false)
            // @ts-ignore
            const newList = clients.filter(client => client.id !== delItem)
            setClients(newList)
            closeNotification()
        } else {
            return
        }

    }

    const handleBan = (e: SyntheticEvent) => {
        // @ts-ignore
        const banItem = e.currentTarget.parentNode.parentNode.id
        // @ts-ignore
        const banName = e.currentTarget.parentNode.parentNode.dataset.name

        if(window.confirm(`Czy na pewno chcesz zablokować uzytkownika ${banName} ?`)) {
            setMess(`Klient ${banName} został zbanowany`)
            setSuccess(false)
            banClient(banItem)
            // @ts-ignore
            e.currentTarget.parentNode.parentNode.classList.add('banned')
            closeNotification()
        } else {
            return
        }

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
            <div>
                <input type="search" placeholder='Wyszukaj uzytkownika' onChange={e => handleSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}/>
            </div>
            <div className="Clients">
                <ClientListHeader/>
                <ClientsList listClient={clients} clickDel={handleDelete} clickBan={handleBan} search={search}/>
            </div>
            <Notification msg={mess} succ={success}/>
            {addClient ? <AddClient adClient={addClient} setClient={setAddClient}/> : null}
        </div>
    )
}

// todo dodaj edycję klienta