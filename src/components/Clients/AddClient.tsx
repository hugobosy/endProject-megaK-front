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
                <h2>Dodaj nowego klienta</h2>
                <div>
                    <label>Imię: </label>
                    <p><input type="text" value={addForm.name}/></p>
                </div>

                <div>
                    <label>Nazwisko: </label>
                    <p><input type="text" value={addForm.surname}/></p>
                </div>

                <div>
                    <label>Adres: </label>
                    <p><input type="text" value={addForm.address}/></p>
                </div>

                <div>
                    <label>Kod pocztowy: </label>
                    <p><input type="text" value={addForm.code}/></p>
                </div>

                <div>
                    <label>Miejscowość: </label>
                    <p><input type="text" value={addForm.city}/></p>
                </div>

                <div>
                    <label>Numer telefonu: </label>
                    <p><input type="number" value={addForm.phone}/></p>
                </div>

                <div>
                    <label>Wybierz płeć:</label>
                    <p>
                        <select value={addForm.gender}>
                            <option value="-">-</option>
                            <option value="Mężczyzna">Mężczyzna</option>
                            <option value="Kobieta">Kobieta</option>
                        </select>
                    </p>
                </div>
                <div>
                    <label>Email: </label>
                    <p><input type="email" value={addForm.email}/></p>
                </div>
                <button type="submit">Dodaj klienta</button>
                <span></span>
            </form>
        </div>
    )
}