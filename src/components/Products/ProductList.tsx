import React, {useEffect, useState} from "react";
import {AdCategory, Product} from "types";

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
                        <p>{product.description.slice(0, 100)}...Czytaj więcej</p>
                        <p>{product.price} zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}