import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {AdCategory, Product} from "types";
import {Notification} from "../common/Notification/Notification";

interface Props {
    id: string;
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
        size: '-',
        color: '',
        price: 0,
        quantity: 0,
        description: '',
        picture: '',
    })

    const getCategory = async () => {
        const res = await fetch('http://localhost:3001/category');
        const data = await res.json()
        setCategory(await data);
    }

    const getOne = async (id: string) => {
        const res = await fetch(`http://localhost:3001/products/${id}`);
        const data = res.json();
        setProductOne(await data);
    }

    useEffect(() => {
        getOne(props.id)
        getCategory();
        setData({...data, id: props.id})
    }, [])

    const id = props.id;

    const handleEdit = async() => {
        await fetch(`http://localhost:3001/products/edit/${id}`, {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const handleEditSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        handleEdit()

    }

    console.log(data)

    return (
        <div className="Products__add">
            {productOne.map(product => (
                <form className="Products__add-form" onSubmit={handleEditSubmit} id={product.id} key={product.id}>
                    <div>
                        <label>Nazwa firmy: </label>
                        <p><input type="text" value={data.firm} placeholder={product.firm} onChange={e => setData({...data, firm: e.target.value})}/>
                        </p>
                    </div>

                    <div>
                        <label>Model produktu: </label>
                        <p><input type="text" value={data.model} placeholder={product.model} onChange={e => setData({...data, model: e.target.value})}/>
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
                        <label>Rozmiar: </label>
                        <p>
                            {product.category === '-' ? <select value={product.size}>
                                <option value="-">-</option>
                            </select> : product.category === 'Buty' || product.category === 'Skarpety' ?
                                <select value={data.size} onChange={e => setData({...data, size: Number(e.target.value)})}>
                                    <option value="-">-</option>
                                    <option value="42">42</option>
                                </select> : <select value={data.size} onChange={e => setData({...data, size: e.target.value})}>
                                    <option value="-">-</option>
                                    <option value="L">L</option>
                                </select>}
                        </p>
                    </div>

                    <div>
                        <label>Kolor: </label>
                        <p><input type="text" value={data.color} placeholder={product.color} onChange={e => setData({...data, color: e.target.value})}/>
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