import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {ClientType, Product} from "types";
import {v4 as uuid} from 'uuid';
import {addItem, getItems} from "../../helpers/functions";

interface Props {
    close: Dispatch<SetStateAction<boolean>>;
}

interface Data {
    id: string,
    date: string,
    payment: number,
    client: string
}

export const AddOrder = (props: Props) => {

    const [client, setClient] = useState<ClientType[]>([]);
    const [product, setProduct] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const itemsPrice = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    const taxPrice = 23 / 123 * itemsPrice;

    const [data, setData] = useState<Data>({
        id: uuid(),
        date: new Date().toLocaleString(),
        payment: 0,
        client: ''
    })

    useEffect(() => {
        getItems(`http://localhost:3001/clients`, setClient)
        getItems('http://localhost:3001/products', setProduct)
    }, [])

    const addToBasket = (product: Product) => {
        const exist = cart.find(item => item.id === product.id)
        if(exist) {
            setCart(cart.map(item => item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item))
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
    }

    const removeFromBasket = (product: Product) => {
        // @ts-ignore
        const exist: Product = cart.find(item => item.id === product.id)
        if(exist.quantity === 1) {
            setCart(cart.filter(item => item.id !== product.id))
        } else {
            setCart(cart.map(item => item.id === product.id ? {...exist, quantity: exist.quantity - 1} : item))
        }
    }

    const dataBase = [{
        id: data.id,
        date: data.date,
        total: itemsPrice,
        payment: data.payment,
        products: cart.map(item => `${item.firm} ${item.model}`).toString(),
        productID: cart.map(item => ({id: item.id, count: item.quantity})),
        quantity: cart.map(item => item.quantity).reduce((prev,curr) => prev + curr, 0),
        client: data.client
    }]

    const handleBuy = (e: SyntheticEvent) => {
        e.preventDefault()

        if(cart && data.client) {
            addItem(dataBase, 'http://localhost:3001/orders/simulate');
            setTimeout(() => {
                props.close(false);
                window.location.reload();
            }, 3000)
        } else {
            alert('Musisz wybrać produkt i klienta!')
        }
    }

    return (
        <div className="Products__add">
            <div className="Orders__add-form">
                <fieldset>
                    <legend>Wybierz produkt/produkty które chcesz kupić</legend>
                    {product.map(product => product.quantity ? <div key={product.id} className="Orders__select-product">
                            <p><img src={product.picture} alt="Produkt"/><strong>{product.firm} {product.model}</strong>
                            </p>
                            <button onClick={() => addToBasket(product)}>Dodaj produkt</button>
                        </div> : null
                    )}
                </fieldset>

                <fieldset>
                    <legend>Wybierz klienta</legend>
                    <select onChange={e => setData({...data, client: e.target.value})}>
                        <option value="-">-</option>
                        {client.map(client =>
                            <>
                                <option key={client.id} id={client.id}
                                        value={`${client.name} ${client.surname}, ${client.address}, ${client.code} ${client.city}`}>{client.name} {client.surname}</option>
                            </>
                        )}</select>

                </fieldset>
                <span onClick={() => props.close(false)}></span>

                <div className="Orders__basket">
                    Koszyk
                    <hr/>
                    <div>{cart.length === 0 && <div>Koszyk jest pusty</div>}</div>
                    {cart.map(item =>
                        <div key={item.id} className="Orders__basket-item">
                            <div>{item.firm} {item.model}</div>
                            <div>
                                <button className="Order__basket-button" onClick={()=>addToBasket(item)}>+</button>
                                <button className="Order__basket-button" onClick={()=>removeFromBasket(item)}>-</button>
                            </div>
                            <div>
                                {item.quantity} x {item.price.toFixed(2)}
                            </div>
                        </div>
                    )}
                    Koszt
                    {cart.length !== 0 && (
                        <>
                            <hr/>
                            <div>
                                <p>Cena produktów:</p>
                                <p>{itemsPrice.toFixed(2)}</p>
                                <p>Podatek VAT:</p>
                                <p>{taxPrice.toFixed(2)}</p>
                            </div>
                        </>
                    )}

                        <button onClick={() => setData({...data, payment: 1})}>Zapłać</button>

                        <p><button onClick={handleBuy}>Symuluj zakupy</button></p>
                </div>


            </div>
        </div>
    )
}