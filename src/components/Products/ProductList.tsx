import React, {MouseEventHandler, SyntheticEvent, useEffect, useState} from "react";
import {Product} from "types";
import {ProductSort} from "./ProductSort";

interface Props {
    products: Product[]
    delete: MouseEventHandler
    edit: MouseEventHandler
    orderNow: MouseEventHandler
    search: Product[]
}

export const ProductList = (props: Props) => {

    const [sorted, setSorted] = useState<Product[]>([]);

    const handleSort = (e: string) => {
        if (e === 'expensive') {
            setSorted([...props.products].sort((a, b) => {
                if (a.price < b.price) return 1
                if (a.price > b.price) return -1
                return 0
            }))
        } else if (e === 'cheap') {
            setSorted([...props.products].sort((a, b) => {
                if (a.price < b.price) return -1
                if (a.price > b.price) return 1
                return 0
            }))
        } else if (e === 'alphabetically') {
            setSorted([...props.products].sort((a, b) => {
                if (a.firm < b.firm) return -1
                if (a.firm > b.firm) return 1
                return 0
            }))
        } else if (e === 'category') {
            setSorted([...props.products].sort((a, b) => {
                if (a.category < b.category) return -1
                if (a.category > b.category) return 1
                return 0
            }))
        } else {
            setSorted([]);
        }
    }

    return (
        <>
            <ProductSort handleSort={handleSort}/>
            <div className="Products__list">

                {sorted.length ?
                    sorted.map(product => (
                        <div className="Products__item" key={product.id}>
                            <div className="Products__picture">
                                <img src={product.picture}
                                     alt="But"/>
                            </div>
                            <div className="Products__desc"
                                 style={product.quantity ? {background: "#ffffff"} : {
                                     background: "#d37878",
                                     color: "#fff"
                                 }}>
                                <h2>{product.firm}</h2>
                                <h5>{product.model}</h5>
                                <p>{product.category}</p>
                                <p>{product.description.slice(0, 90)}... Czytaj więcej</p>
                                <p><span>Pozostałych sztuk: </span> {product.quantity}</p>
                                <p>{product.price} zł</p>
                                <div className="Products__btn">
                                    <button onClick={props.edit} id={product.id}>Edytuj</button>
                                    <button onClick={props.delete} id={product.id}
                                            data-name={`${product.firm} ${product.model}`}>Usuń
                                    </button>
                                    {product.quantity ? null :
                                        <button onClick={props.orderNow} id={product.id}>Zamów</button>}
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    props.search.length ?
                        props.search.map(product => (
                            <div className="Products__item" key={product.id}>
                                <div className="Products__picture">
                                    <img src={product.picture}
                                         alt="But"/>
                                </div>
                                <div className="Products__desc"
                                     style={product.quantity ? {background: "#ffffff"} : {
                                         background: "#d37878",
                                         color: "#fff"
                                     }}>
                                    <h2>{product.firm}</h2>
                                    <h5>{product.model}</h5>
                                    <p>{product.category}</p>
                                    <p>{product.description.slice(0, 90)}... Czytaj więcej</p>
                                    <p><span>Pozostałych sztuk: </span> {product.quantity}</p>
                                    <p>{product.price} zł</p>
                                    <div className="Products__btn">
                                        <button onClick={props.edit} id={product.id}>Edytuj</button>
                                        <button onClick={props.delete} id={product.id}
                                                data-name={`${product.firm} ${product.model}`}>Usuń
                                        </button>
                                        {product.quantity ? null :
                                            <button onClick={props.orderNow} id={product.id}>Zamów</button>}
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        props.products.map(product => (
                            <div className="Products__item" key={product.id}>
                                <div className="Products__picture">
                                    <img src={product.picture}
                                         alt="But"/>
                                </div>
                                <div className="Products__desc"
                                     style={product.quantity ? {background: "#ffffff"} : {
                                         background: "#d37878",
                                         color: "#fff"
                                     }}>
                                    <h2>{product.firm}</h2>
                                    <h5>{product.model}</h5>
                                    <p>{product.category}</p>
                                    <p>{product.description.slice(0, 90)}... Czytaj więcej</p>
                                    <p><span>Pozostałych sztuk: </span> {product.quantity}</p>
                                    <p>{product.price} zł</p>
                                    <div className="Products__btn">
                                        <button onClick={props.edit} id={product.id}>Edytuj</button>
                                        <button onClick={props.delete} id={product.id}
                                                data-name={`${product.firm} ${product.model}`}>Usuń
                                        </button>
                                        {product.quantity ? null :
                                            <button onClick={props.orderNow} id={product.id}>Zamów</button>}
                                    </div>
                                </div>
                            </div>
                        ))}
                {/*    todo dodaj opcję liczba sprzedanch sztuk na podstawie informacji z bazy*/}
            </div>
        </>
    )
}