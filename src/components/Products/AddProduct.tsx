import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {AdCategory} from "types";

interface Props {
    close: Dispatch<SetStateAction<boolean>>
}

export const AddProduct = (props: Props) => {

    const [data, setData] = useState({
        firm: '',
        model: '',
        category: '-',
        size: '-',
        color: '',
        quantity: 0,
        description: '',
        picture: '',
    })

    const [category, setCategory] = useState<AdCategory[]>([]);

    const getCategory = async () => {
        const res = await fetch('http://localhost:3001/category');
        const data = await res.json()
        setCategory(await data);
    }

    useEffect(() => {
        getCategory();
    }, [])

    const addProduct = async () => {
        await fetch('http://localhost:3001/products/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        });
    }

    const handleAddSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        addProduct();
        setData({
            firm: '',
            model: '',
            category: '-',
            size: '-',
            color: '',
            quantity: 0,
            description: '',
            picture: '',
        })
    }

    return (
        <div className="Products__add">
            <form className="Products__add-form" onSubmit={handleAddSubmit}>
                <div>
                    <label>Nazwa firmy: </label>
                    <p><input type="text" value={data.firm} onChange={e => setData({...data, firm: e.target.value})}/></p>
                </div>

                <div>
                    <label>Model produktu: </label>
                    <p><input type="text" value={data.model} onChange={e => setData({...data, model: e.target.value})}/></p>
                </div>

                <div>
                    <label>Kategoria: </label>
                    <p>
                        <select value={data.category} onChange={e => setData({...data, category: e.target.value})}>
                            <option value="-">-</option>
                            {category.map(cat => (
                                <option value={cat.name} key={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </p>
                </div>

                <div>
                    <label>Rozmiar: </label>
                    <p>
                        {data.category === '-' ? <select>
                            <option value="-">-</option>
                        </select> : data.category === 'Buty' || data.category === 'Skarpety' ?
                            <select onChange={e => setData({...data, size: e.target.value})}>
                                <option value="-">-</option>
                                <option value="42">42</option>
                            </select> : <select onChange={e => setData({...data, size: e.target.value})}>
                                <option value="-">-</option>
                                <option value="L">L</option>
                            </select>}
                    </p>
                </div>

                <div>
                    <label>Kolor: </label>
                    <p><input type="text" value={data.color} onChange={e => setData({...data, color: e.target.value})}/></p>
                </div>

                <div>
                    <label>Ilość: </label>
                    <p><input type="number" value={data.quantity} onChange={e => setData({...data, quantity: Number(e.target.value)})}/></p>
                </div>

                <div className="Products__add-textarea">
                    <label>Opis produktu: </label>
                    <p><textarea value={data.description} onChange={e => setData({...data, description: e.target.value})}></textarea></p>
                </div>

                <div>
                    <label>Link do zdjęcia: </label>
                    <p><input type="text" value={data.picture} onChange={e => setData({...data, picture: e.target.value})}/></p>
                </div>

                <div>
                    <label>Link do zdjęcia: </label>
                    <p><input type="text" value={data.picture} onChange={e => setData({...data, picture: e.target.value})}/></p>
                </div>

                <button type="submit">Dodaj produkt</button>
                <span onClick={() => props.close(false)}></span>
            </form>
        </div>
    )

}

// todo dodaj placeholders do input