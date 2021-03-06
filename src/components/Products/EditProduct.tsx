import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {AdCategory, Product} from "types";
import {Notification} from "../common/Notification/Notification";
import {closeNotification, getItems} from "../../helpers/functions";

interface Props {
    id: string;
    products: Product[],
    close: Dispatch<SetStateAction<boolean>>
}

export const EditProduct = (props: Props) => {

    const [productOne, setProductOne] = useState<Product[]>([])
    const [category, setCategory] = useState<AdCategory[]>([]);
    const [succ, setSucc] = useState<boolean | null>(null)
    const [msg, setMsg] = useState<string>('')
    const [data, setData] = useState<Product>({
        firm: '',
        model: '',
        category: '-',
        price: 0,
        quantity: 0,
        description: '',
        picture: '',
    })

    useEffect(() => {
        getItems(`http://localhost:3001/products/${id}`, setProductOne)
        getItems('http://localhost:3001/category', setCategory);
        setData({...data, id: props.id})
    }, [])

    const id = props.id;

    const handleEdit = async () => {
        await fetch(`http://localhost:3001/products/edit/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({data}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const handleEditSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        if(!data.firm || !data.model || !data.category || !data.price || !data.quantity || !data.description || !data.picture){
            setMsg(`Wszystkie pola muszą być wypełnione!`);
            setSucc(false)
            closeNotification(setSucc)
        } else {
            setMsg(`Produkt został edytowany`);
            setSucc(true)
            handleEdit()
            closeNotification(setSucc)
            setTimeout(() => {
                window.location.reload()
            }, 3400)
        }
    }

    return (
        <div className="Products__add">
            {productOne.map(product => (
                <form className="Products__add-form" onSubmit={handleEditSubmit} id={product.id} key={product.id}>
                    <div>
                        <label>Nazwa firmy: </label>
                        <p><input type="text" value={data.firm} placeholder={product.firm}
                                  onChange={e => setData({...data, firm: e.target.value})}/>
                        </p>
                    </div>

                    <div>
                        <label>Model produktu: </label>
                        <p><input type="text" value={data.model} placeholder={product.model}
                                  onChange={e => setData({...data, model: e.target.value})}/>
                        </p>
                    </div>

                    <div>
                        <label>Kategoria: </label>
                        <p>
                            <select value={data.category} onChange={e => setData({...data, category: e.target.value})}>
                                <option value={"-"}>-</option>
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
                        <p><textarea value={data.description} placeholder={product.description}
                                     onChange={e => setData({...data, description: e.target.value})}></textarea></p>
                    </div>

                    <div>
                        <label>Link do zdjęcia: </label>
                        <p><input type="text" value={data.picture} placeholder={product.picture}
                                  onChange={e => setData({...data, picture: e.target.value})}/></p>
                    </div>

                    <div>
                        <label>Cena: </label>
                        <p><input type="number" value={data.price}
                                  onChange={e => setData({...data, price: Number(e.target.value)})}/></p>
                    </div>

                    <button type="submit">Edytuj produkt</button>
                    <span onClick={() => props.close(false)}></span>
                </form>
            ))}
            <Notification msg={msg} succ={succ}/>
        </div>
    )
}

