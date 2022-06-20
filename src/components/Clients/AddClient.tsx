import React, {Dispatch, SetStateAction, SyntheticEvent, useState} from "react";
import {v4 as uuid} from 'uuid';
import {Notification} from "../common/Notification/Notification";

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

    const [succ, setSucc] = useState<boolean | null>(null)
    const [msg, setMsg] = useState<string>('')
    const [accept, setAccept] = useState<boolean>(false);

    const closeNotification = () => {
        setTimeout(() => {
            setSucc(null)
        }, 3000)
    }

    const addClient = async () => {
        await fetch('http://localhost:3001/clients/add', {
            method: 'POST',
            body: JSON.stringify(addForm),
            headers: {
                'Content-type': 'application/json',
            },
        })

    }

    function close() {
        if (succ === null) {
            props.setClient(false);
        }
    }

    const handleSubmitAddClient = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!addForm.id) {
            setAddForm({
                ...addForm,
                id: uuid()
            })
        }

        if (!addForm.name || addForm.name.length < 3 || addForm.name.length > 36 || !/^[A-Za-z]/.test(addForm.name)) {
            setSucc(false)
            setMsg('Imię powinno mieć minimum 3 znaki oraz maks 36 znaków bez liczb')
            closeNotification()
            return false
        }
        if (!addForm.surname || addForm.surname.length < 2 || addForm.surname.length > 96 || !/^[A-Za-z]/.test(addForm.surname)) {
            setSucc(false)
            setMsg('Nazwisko powinno mieć minimum 2 znaki oraz maks 96 znaków bez liczb')
            closeNotification()
            return
        }
        if (!addForm.address || addForm.address.length < 5 || addForm.address.length > 150) {
            setSucc(false)
            setMsg('Adres powinno mieć minimum 5 znaków oraz maks 150 znaków')
            closeNotification()
            return
        }
        if (!/^[0-9]{2}-[0-9]{3}$/.test(addForm.code)) {
            setSucc(false)
            setMsg('Nieprawidłowy format kodu pocztowego')
            closeNotification()
            return
        }
        if (!addForm.city || addForm.city.length < 3 || addForm.city.length > 70 || !/^[A-Za-z]/.test(addForm.city)) {
            setSucc(false)
            setMsg('Nazwa miejscowości powinna składać się z min 3 znaków oraz maks 70 znaków i bez liczb')
            return
        }
        if (!addForm.phone || String(addForm.phone).length !== 9 || !/^[0-9]/.test(String(addForm.phone))) {
            setSucc(false)
            setMsg('Numer tel (pol) składa się z 9 cyfr !')
            closeNotification()
            return
        }
        if (addForm.gender === '-') {
            setSucc(false)
            setMsg('Musisz podac jedną z płci')
            closeNotification()
            return
        }
        if (!addForm.email || !/\S+@\S+\.\S+/.test(addForm.email)) {
            setSucc(false)
            setMsg('Nieprawidłowy e-mail')
            closeNotification()
            return
        }

        if(addForm.name && addForm.surname && addForm.address && addForm.code && addForm.city && addForm.phone && addForm.gender && addForm.email) {
            addClient();

            setSucc(true);
            setMsg('Dodano klienta do bazy')
            closeNotification()
            setAccept(true)
        }
    }

    if(accept) {
        setTimeout(()=>{
            props.setClient(false)
            window.location.reload()
        }, 3400)
    }

    //todo dodac walidacje formularza
    return (
        <div className="Clients__add">
            <form className="Clients__add-form" onSubmit={handleSubmitAddClient}>
                <h2>Dodaj nowego klienta</h2>
                <div>
                    <label>Imię: </label>
                    <p><input type="text" value={addForm.name}
                              onChange={e => setAddForm({...addForm, name: e.target.value})}/></p>
                </div>

                <div>
                    <label>Nazwisko: </label>
                    <p><input type="text" value={addForm.surname}
                              onChange={e => setAddForm({...addForm, surname: e.target.value})}/></p>
                </div>

                <div>
                    <label>Adres: </label>
                    <p><input type="text" value={addForm.address}
                              onChange={e => setAddForm({...addForm, address: e.target.value})}/></p>
                </div>

                <div>
                    <label>Kod pocztowy: </label>
                    <p><input type="text" value={addForm.code}
                              onChange={e => setAddForm({...addForm, code: e.target.value})}/></p>
                </div>

                <div>
                    <label>Miejscowość: </label>
                    <p><input type="text" value={addForm.city}
                              onChange={e => setAddForm({...addForm, city: e.target.value})}/></p>
                </div>

                <div>
                    <label>Numer telefonu: </label>
                    <p><input type="number" value={addForm.phone}
                              onChange={e => setAddForm({...addForm, phone: Number(e.target.value)})}/></p>
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
                    <p><input type="email" value={addForm.email}
                              onChange={e => setAddForm({...addForm, email: e.target.value})}/></p>
                </div>
                <button type="submit">Dodaj klienta</button>
                <span onClick={() => props.setClient(false)}></span>
                <Notification msg={msg} succ={succ}/>
            </form>
        </div>
    )
}