import React, {MouseEventHandler} from "react";
import {Product} from "types";

interface Props {
    products: Product[]
    delete: MouseEventHandler
    edit: MouseEventHandler
}

export const ProductList = (props: Props) => {

    return (
        <div className="Products__list">
            {props.products.map(product => (
                <div className="Products__item" key={product.id}>
                    <div className="Products__picture">
                        <img src={product.picture}
                             alt="But"/>
                    </div>
                    <div className="Products__desc" style={product.quantity ? {background: "#ffffff"} : {background: "#d37878", color: "#fff"}}>
                        <h2>{product.firm}</h2>
                        <h5>{product.model}</h5>
                        <p>{product.category}</p>
                        <p>{product.description.slice(0, 90)}... Czytaj więcej</p>
                        <p><span>Pozostałych sztuk: </span> {product.quantity}</p>
                        <p>{product.price} zł</p>
                        <div className="Products__btn">
                            <button onClick={props.edit} id={product.id}>Edytuj</button>
                            <button onClick={props.delete} id={product.id} data-name={`${product.firm} ${product.model}`}>Usuń</button>
                            {product.quantity ? null : <button id={product.id}>Zamów</button>}
                        </div>
                    {/*    todo dodaj potierdzenia do usunięcia produktu*/}
                    </div>
                </div>
            ))}
        {/*    todo dodaj opcję liczba sprzedanch sztuk na podstawie informacji z bazy*/}
        </div>
    )
}