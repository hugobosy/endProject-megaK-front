import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {ClientType, Product} from "types";
import {v4 as uuid} from 'uuid';

// interface Data {
//     date: string,
//     id: string,
//     products: string,
//     client: string,
//     count: number,
//     total: number,
//     payment: boolean,
//     buy: { id: string, count: number }[]
// }
//
interface Props {
    close: Dispatch<SetStateAction<boolean>>;
}

export const AddOrder = (props: Props) => {

    const [client, setClient] = useState<ClientType[]>([]);
    const [product, setProduct] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([])

    // const [data, setData] = useState<Data>({
    //     date: new Date().toLocaleString(),
    //     id: uuid(),
    //     products: '',
    //     client: '',
    //     count: 0,
    //     total: 0,
    //     payment: false,
    //     buy: [],
    // })

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

    const itemsPrice = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    const taxPrice = 23 / 123 * itemsPrice;

    const buy = async () => {
        // await fetch('http://localhost:3001/orders/simulate', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

    }

    const handleBuy = (e: SyntheticEvent) => {
        // e.preventDefault()
        //
        // if(data.products && data.client) {
        //     buy();
        //     setTimeout(() => {
        //         props.close(false);
        //         window.location.reload();
        //     }, 1000)
        // } else {
        //     alert('Musisz wybrać produkt i klienta!')
        // }


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


                    <select>
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
                    <div>{cart.length === 0 && <div>Koszyj jest pusty</div>}</div>
                    {cart.map(item =>
                        <div key={item.id} className="Orders__basket-item">
                            <div>{item.firm} {item.model}</div>
                            <div>
                                <button onClick={()=>addToBasket(item)}>+</button>
                                <button onClick={()=>removeFromBasket(item)}>-</button>
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

                    {/*    <button onClick={() => setData({...data, payment: true})}>Zapłać</button>*/}

                    {/*    <p><button onClick={handleBuy}>Symuluj zakupy</button></p>*/}
                </div>


            </div>
        </div>
    )
}