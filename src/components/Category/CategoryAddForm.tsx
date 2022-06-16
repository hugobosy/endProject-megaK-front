import React, {SyntheticEvent, useState} from "react";
import {AdCategory, Data} from "types";

export const CategoryAddForm = () => {

    const [data, setData] = useState<Data>({
        name: '',
        image: '',
    })

    const [info, setInfo] = useState<string>('')


    const handleSubmit = async (e:SyntheticEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3001/category/add', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const info: AdCategory = await res.json();

            console.log(info)

            setInfo(`Kategoria ${info.name} została pomyślnie dodana do bazy`)

        } catch (e) {
            setInfo(`Nieznany błąd`)
        } finally {

        }
    }

    return (
        <div className="Category__header">
            <h1>Kategorie</h1>
            <form onSubmit={handleSubmit}>

                <label>Dodaj nową kategorię</label>
                <p>
                    <input type="text" value={data.name} onChange={e => setData({...data, name: e.target.value})}/>
                </p>
                <label>Dodaj adres odnośnika do obrazka reprezentującego kategorię</label>
                <p>
                    <input type="text" value={data.image} onChange={e => setData({...data, image: e.target.value})}/>
                </p>

                <button type="submit">Dodaj</button>
            </form>
            {/*    todo dodawanie kategorii bo bazy*/}
        </div>
    )
}