import React, {useState} from 'react';
import {Order} from "types";

interface Props {
    orders: Order[],
}

export const OrdersList = (props: Props) => {

    const [sortList, setSortList] = useState<Order[]>([])
    const [sort, setSort] = useState('-')

    const handleSort = (e: string) => {
        setSort(e)
        if(e === 'date') {
            setSortList([...props.orders].sort((a,b) => {
                if(new Date(a.date).getTime() < new Date(b.date).getTime()) return 1
                if(new Date(a.date).getTime() > new Date(b.date).getTime()) return -1
                return 0
            }))
        } else if (e === 'price') {
            setSortList([...props.orders].sort((a,b) => {
                if(a.total < b.total) return -1
                if(a.total > b.total) return 1
                return 0
            }))
        } else if (e === 'payment') {
            setSortList([...props.orders].sort((a, b) => {
                if(a.payment < b.payment) return -1
                if(a.payment > b.payment) return 1
                return 0
            }))
        }
    }

    console.log(sortList)

    return (
        <>
            <div>
                <label>Sortuj: </label>
                <select value={sort} onChange={e => handleSort(e.target.value)}>
                    <option value="-">-</option>
                    <option value="date">po dacie</option>
                    <option value="price">po cenie</option>
                    <option value="payment">po płatności</option>
                </select>
            </div>
            <div className="Orders">
                <h2>Lista zamówień</h2>
                <div className="Orders__list">
                    <div className="Orders__header">
                        <p>Data zakupu</p>
                        <p>Id zakupu</p>
                        <p>Produkty</p>
                        <p>Dane kupującego</p>
                        <p>Liczba produktów</p>
                        <p>Łączna cena</p>
                        <p>Płatność</p>
                    </div>
                    {sortList.length ? sortList.map(order => (
                        <div className="Orders__content" key={order.id}>
                            <p>{order.date}</p>
                            <p>{order.id}</p>
                            <div>
                                {order.products.split(', ').map(item => <p key={item}>{item}</p>)}
                            </div>
                            <div>
                                {order.client.split(', ').map(cli => <p key={cli}>{cli}</p>)}
                            </div>
                            <p>{order.count}</p>
                            <p>{order.total}</p>
                            <p>{order.payment ? 'Zakończona' : 'W trakcie'}</p>
                        </div>
                    )) : props.orders.map(order => (
                        <div className="Orders__content" key={order.id}>
                            <p>{order.date}</p>
                            <p>{order.id}</p>
                            <div>
                                {order.products.split(', ').map(item => <p key={item}>{item}</p>)}
                            </div>
                            <div>
                                {order.client.split(', ').map(cli => <p key={cli}>{cli}</p>)}
                            </div>
                            <p>{order.count}</p>
                            <p>{order.total}</p>
                            <p>{order.payment ? 'Zakończona' : 'W trakcie'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}