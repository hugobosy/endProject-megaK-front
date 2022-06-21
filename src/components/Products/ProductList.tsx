import React from "react";
import {Product} from "types";

interface Props {
    products: Product[]
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
                    <div className="Products__desc">
                        <h2>{product.firm} {product.model}</h2>
                        <p>{product.name}</p>
                        <p>{product.description.slice(0, 90)}...Czytaj więcej</p>
                        <p><span>Pozostałych sztuk: </span> {product.quantity}</p>
                        <p>{product.price} zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>
            ))}
        {/*    todo dodaj opcję liczba sprzedanch sztuk na podstawie informacji z bazy*/}
        </div>
    )
}