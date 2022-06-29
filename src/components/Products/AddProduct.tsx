import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {AdCategory, Product} from "types";
import {Notification} from "../common/Notification/Notification";

interface Props {
    close: Dispatch<SetStateAction<boolean>>
}

export const AddProduct = (props: Props) => {

    const [data, setData] = useState<Product>({
        firm: '',
        model: '',
        category: '-',
        price: 0,
        quantity: 0,
        description: '',
        picture: '',
    })

    const [category, setCategory] = useState<AdCategory[]>([]);
    const [accept, setAccept] = useState<boolean>(false)
    const [succ, setSucc] = useState<boolean | null>(null)
    const [msg, setMsg] = useState<string>('')

    const closeNotification = () => {
        setTimeout(() => {
            setSucc(null)
        }, 3000)
    }

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
        setSucc(true);
        setMsg(`Dodano produkt ${data.firm} ${data.model} do bazy`)
        closeNotification()
        setAccept(true)
        setData({
            firm: '',
            model: '',
            category: '-',
            price: 0,
            quantity: 0,
            description: '',
            picture: '',
        })
    }

    if (accept) {
        setTimeout(() => {
            props.close(false)
            window.location.reload()
        }, 3400)
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

// todo dodaj placeholders do input