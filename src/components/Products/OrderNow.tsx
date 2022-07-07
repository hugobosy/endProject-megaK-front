import React, {Dispatch, SetStateAction, SyntheticEvent, useState} from "react";
import {Product} from "types";
import {Notification} from "../common/Notification/Notification";
import {closeNotification} from "../../helpers/functions";

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
    const [succ, setSucc] = useState<boolean | null>(null)
    const [msg, setMsg] = useState<string>('')
    const [accept, setAccept] = useState<boolean>(false)

    const orderNow = async() => {
        await fetch(`http://localhost:3001/products/order`, {
            method: 'PATCH',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    const handleOrder = (e: SyntheticEvent) => {
        e.preventDefault()
        orderNow();
        setSucc(true);
        setMsg(`Zamówiłeś ${order.count} sztuk produktu ${item.map(item => `${item.firm} ${item.model}`)}`);
        closeNotification(setSucc);
        setAccept(true)
    }

    if (accept) {
        setTimeout(() => {
            props.close({active: false, id: ""})
            window.location.reload()
        }, 2000)
    }
    return(
        <div className="OrderNow">
            <div className="OrderNow__content">
                {item.map(item => (
                    <div key={item.id} className="OrderNow__item">
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
            <Notification msg={msg} succ={succ}/>
        </div>
    )
}