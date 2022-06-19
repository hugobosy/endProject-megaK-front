import React, {useState} from "react";

export const AddClient = () => {

    const [addForm, setAddForm] = useState({
        id: '',
        name: '',
        surname: '',
        address: '',
        code: '',
        city: '',
        phone: Number(''),
        gender: '-',
        birth: new Date().getDate(),
        email: '',
    })



    return (
        <div className="Clients__add">
            <form className="Clients__add-form">
                <label>Imię: </label>
                <p><input type="text" value={addForm.name}/></p>

                <label>Nazwisko: </label>
                <p><input type="text" value={addForm.surname}/></p>

                <label>Adres: </label>
                <p><input type="text" value={addForm.address}/></p>

                <label>Kod pocztowy: </label>
                <p><input type="text" value={addForm.code}/></p>

                <label>Miejscowość: </label>
                <p><input type="text" value={addForm.city}/></p>

                <label>Numer telefonu: </label>
                <p><input type="number" value={addForm.phone}/></p>

                <label>Wybierz płeć:</label>
                <p>
                    <select value={addForm.gender}>
                        <option value="-">-</option>
                        <option value="Mężczyzna">Mężczyzna</option>
                        <option value="Kobieta">Kobieta</option>
                    </select>
                </p>
                <label>Email: </label>
                <p><input type="email" value={addForm.email}/></p>
                <button type="submit">Dodaj klienta</button>
            </form>
        </div>
    )
}