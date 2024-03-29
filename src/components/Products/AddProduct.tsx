import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import {AdCategory, Product} from "types";
import {Notification} from "../common/Notification/Notification";
import {addItem, closeNotification, getItems} from "../../helpers/functions";

interface Props {
    close: Dispatch<SetStateAction<boolean>>
}

export const AddProduct = (props: Props) => {

    const [data, setData] = useState<Product>({
        id: uuid(),
        firm: '',
        model: '',
        category: '-',
        price: 0,
        quantity: 0,
        description: '',
        picture: '',
    })

    const [category, setCategory] = useState<AdCategory[]>([]);
    const [succ, setSucc] = useState<boolean | null>(null)
    const [msg, setMsg] = useState<string>('')

    useEffect(() => {
        getItems('http://localhost:3001/category', setCategory);
    }, [])

    const handleAddSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        addItem(data, 'http://localhost:3001/products/add');
        setSucc(true);
        setMsg(`Dodano produkt ${data.firm} ${data.model} do bazy`)
        closeNotification(setSucc);
        setTimeout(()=>{
            window.location.reload()
        }, 2000)
    }

    return (
        <div className="Products__add">
            <form className="Products__add-form" onSubmit={handleAddSubmit}>
                <div>
                    <label>Nazwa firmy: </label>
                    <p><input type="text" value={data.firm} onChange={e => setData({...data, firm: e.target.value})}/>
                    </p>
                </div>

                <div>
                    <label>Model produktu: </label>
                    <p><input type="text" value={data.model} onChange={e => setData({...data, model: e.target.value})}/>
                    </p>
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
                    <label>Ilość: </label>
                    <p><input type="number" value={data.quantity}
                              onChange={e => setData({...data, quantity: Number(e.target.value)})}/></p>
                </div>

                <div className="Products__add-textarea">
                    <label>Opis produktu: </label>
                    <p><textarea value={data.description}
                                 onChange={e => setData({...data, description: e.target.value})}></textarea></p>
                </div>

                <div>
                    <label>Link do zdjęcia: </label>
                    <p><input type="text" value={data.picture}
                              onChange={e => setData({...data, picture: e.target.value})}/></p>
                </div>

                <div>
                    <label>Cena: </label>
                    <p><input type="number" value={data.price}
                              onChange={e => setData({...data, price: Number(e.target.value)})}/></p>
                </div>

                <button type="submit">Dodaj produkt</button>
                <span onClick={() => props.close(false)}></span>
            </form>
            <Notification msg={msg} succ={succ}/>
        </div>
    )

}