import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {ClientType, Product} from "types";
import {v4 as uuid} from 'uuid';

interface Data {
    date: string,
    id: string,
    products: string,
    client: string,
    count: number,
    total: number,
    payment: boolean
}

interface Props {
    close: Dispatch<SetStateAction<boolean>>;
}

export const AddOrder = (props: Props) => {

    const [client, setClient] = useState<ClientType[]>([]);
    const [product, setProduct] = useState<Product[]>([]);

    const [data, setData] = useState<Data>({
        date: new Date().toLocaleString(),
        id: uuid(),
        products: '',
        client: '',
        count: 0,
        total: 0,
        payment: false,
    })

    const getClient = async () => {
        const res = await fetch(`http://localhost:3001/clients`);
        const data = await res.json();
        setClient(await data)
    }

    const getProduct = async () => {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setProduct(await data)
    }

    useEffect(() => {
        getClient()
        getProduct()
    }, [])

    const addToBasket = (e: SyntheticEvent) => {
        e.preventDefault();
        // @ts-ignore
        setData({...data, products: data.products.concat(`${e.target.name}, `), count: listProduct.length, total: data.total + Number(e.currentTarget.dataset.price)})
    }

    const listProduct = data.products.split(', ');

    const buy = async() => {
        await fetch('http://localhost:3001/orders/simulate', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

    }

    const handleBuy = (e: SyntheticEvent) => {
        e.preventDefault()
        buy();
        setTimeout(()=> props.close, 1000)

    }

    return (
        <div className="Products__add">
            <div className="Orders__add-form">
                <fieldset>
                    <legend>Wybierz produkt/produkty które chcesz kupić</legend>
                    {product.map(product =>
                        <div key={product.id} className="Orders__select-product">
                            <p><img src={product.picture} alt="Produkt"/><strong>{product.firm} {product.model}</strong>
                            </p>
                            <button onClick={addToBasket} name={`${product.firm} ${product.model}`}
                                    data-price={product.price} id={product.id}>Dodaj produkt
                            </button>
                        </div>
                    )}
                </fieldset>

                <fieldset>
                    <legend>Wybierz klienta</legend>


                    <select value={data.client}
                            onChange={e => setData({...data, client: e.target.value})}>
                        <option value="-">-</option>
                        {client.map(client =>
                        <>
                            <option  key={client.id} id={client.id}
                                    value={`${client.name} ${client.surname}, ${client.address}, ${client.code} ${client.city}`}>{client.name} {client.surname}</option>
                        </>
                    )}</select>

                </fieldset>
                <span onClick={() => props.close(false)}></span>

                <div className="Orders__basket">
                    Koszyk
                    {listProduct.map(item => <p>{item}</p>)}
                    Koszt
                    <p>{data.total}</p>
                </div>

                <button onClick={handleBuy}>Symuluj zakupy</button>
            </div>
        </div>
    )
}