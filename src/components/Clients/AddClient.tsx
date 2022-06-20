import React, {Dispatch, SetStateAction, SyntheticEvent, useState} from "react";
import {v4 as uuid} from 'uuid';

interface Props {
    adClient: boolean,
    setClient: Dispatch<SetStateAction<boolean>>
}

const date = new Date().toLocaleDateString();

export const AddClient = (props: Props) => {

    const [addForm, setAddForm] = useState({
        id: '',
        name: '',
        surname: '',
        address: '',
        code: '',
        city: '',
        phone: Number(''),
        gender: '-',
        birth: date,
        email: '',
    })

    const [error, setError] = useState(false)
    const [msgError, setMsgError] = useState('')


    const addClient = async () => {
        if(!addForm.name || addForm.name.length < 3 || addForm.name.length > 36 || !/^[A-Za-z]/.test(addForm.name)) {
            setError(true)
            setMsgError('Imię powinno mieć minimum 3 znaki oraz maks 36 znaków bez liczb')
            return
        }
        if(!addForm.surname || addForm.surname.length < 2 || addForm.surname.length > 96 || !/^[A-Za-z]/.test(addForm.surname)) {
            setError(true)
            setMsgError('Nazwisko powinno mieć minimum 2 znaki oraz maks 96 znaków bez liczb')
            return
        }
        if(!addForm.address || addForm.address.length < 5 || addForm.address.length > 150) {
            setError(true)
            setMsgError('Adres powinno mieć minimum 5 znaków oraz maks 150 znaków')
            return
        }
        if(!/^[0-9]{2}-[0-9]{3}$/.test(addForm.code)) {
            setError(true)
            setMsgError('Nieprawidłowy format kodu pocztowego')
            return
        }
        if(!addForm.city || addForm.city.length < 3 || addForm.city.length > 70 || !/^[A-Za-z]/.test(addForm.city)) {
            setError(true)
            setMsgError('Nazwa miejscowości powinna składać się z min 3 znaków oraz maks 70 znaków i bez liczb')
            return
        }
        if(!addForm.phone || String(addForm.phone).length !== 9 || !/^[0-9]/.test(String(addForm.phone))) {
            setError(true)
            setMsgError('Numer tel (pol) składa się z 9 cyfr !')
            return
        }
        if(addForm.gender === '-') {
            setError(true)
            setMsgError('Musisz podac jedną z płci')
            return
        }
        if(!addForm.email || !/\S+@\S+\.\S+/.test(addForm.email)) {
            setError(true)
            setMsgError('Nieprawidłowy e-mail')
            return
        }


        await fetch('http://localhost:3001/clients/add', {
            method: 'POST',
            body: JSON.stringify(addForm),
            headers: {
                'Content-type': 'application/json',
            },
        })
    }

    const handleSubmitAddClient = (e: SyntheticEvent) => {
        e.preventDefault();
        if(!addForm.id) {
            setAddForm({
                ...addForm,
                id: uuid()
            })
        }
        addClient();


    }
    //todo dodac walidacje formularza
    return (
        <div className="Clients__add">
            <form className="Clients__add-form" onSubmit={handleSubmitAddClient}>
                <h2>Dodaj nowego klienta</h2>
                <div>
                    <label>Imię: </label>
                    <p><input type="text" value={addForm.name} onChange={e => setAddForm({...addForm, name: e.target.value})}/></p>
                </div>

                <div>
                    <label>Nazwisko: </label>
                    <p><input type="text" value={addForm.surname} onChange={e => setAddForm({...addForm, surname: e.target.value})}/></p>
                </div>

                <div>
                    <label>Adres: </label>
                    <p><input type="text" value={addForm.address} onChange={e => setAddForm({...addForm, address: e.target.value})}/></p>
                </div>

                <div>
                    <label>Kod pocztowy: </label>
                    <p><input type="text" value={addForm.code} onChange={e => setAddForm({...addForm, code: e.target.value})}/></p>
                </div>

                <div>
                    <label>Miejscowość: </label>
                    <p><input type="text" value={addForm.city} onChange={e => setAddForm({...addForm, city: e.target.value})}/></p>
                </div>

                <div>
                    <label>Numer telefonu: </label>
                    <p><input type="number" value={addForm.phone} onChange={e => setAddForm({...addForm, phone: Number(e.target.value)})}/></p>
                </div>

                <div>
                    <label>Wybierz płeć:</label>
                    <p>
                        <select value={addForm.gender} onChange={e => setAddForm({...addForm, gender: e.target.value})}>
                            <option value="-">-</option>
                            <option value="Mężczyzna">Mężczyzna</option>
                            <option value="Kobieta">Kobieta</option>
                        </select>
                    </p>
                </div>
                <div>
                    <label>Email: </label>
                    <p><input type="email" value={addForm.email} onChange={e => setAddForm({...addForm, email: e.target.value})}/></p>
                </div>
                <button type="submit">Dodaj klienta</button>
                <span onClick={() => props.setClient(false)}></span>
            </form>
        </div>
    )
}