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

    const addClient = async () => {
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

    console.log(addForm)
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