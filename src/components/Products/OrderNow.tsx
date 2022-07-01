import React, {Dispatch, SetStateAction, SyntheticEvent, useState} from "react";
import {Product} from "types";

interface Props {
    product: Product[]
    id: string,
    close: Dispatch<SetStateAction<{ active: boolean, id: string}>>
}

export const OrderNow = (props: Props) => {
    const item = props.product.filter(item => item.id === props.id)

    const [order, setOrder] = useState({
        id: props.id,
        count: '',
    })

    const orderNow = async() => {
        await fetch(`http://localhost:3001/products/order`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    const handleOrder = (e: SyntheticEvent) => {
        e.preventDefault()
        orderNow();
    }

    return(
        <div className="OrderNow">
            <div className="OrderNow__content">
                {item.map(item => (
                    <div className="OrderNow__item">
                        <h2>{item.firm}</h2>
                        <h4>{item.model}</h4>
                        <div className="OrderNow__item-img">
                            <img src={item.picture} alt="Karta"/>
                        </div>
                    </div>
                ))}
                <div className="OrderNow__form">
                    <label>Ile sztuk chcesz zamówić?</label>
                    <p><input type="number" value={order.count} onChange={e => setOrder({...order, count: e.target.value})}/></p>
                    <button onClick={handleOrder}>Zamów!</button>
                </div>
                <span className="close" onClick={()=> props.close({active: false, id: ""})}></span>
            </div>
        </div>
    )
}