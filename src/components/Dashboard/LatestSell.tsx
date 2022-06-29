import React from "react";
import {Order, Product} from "types";

interface Props {
    orders: Order[],
    products: Product[]
}

export const LatestSell = (props: Props) => {

    return (
        <div className="Dashboard__latest-sell">
            <h2>Najlepiej sprzedajace się produkty</h2>
            <div className="Dashboard__latest-item">
                <p>Photo</p>
                <p>Id produktu</p>
                <p>Nazwa produktu</p>
                <p>Cena</p>
                <p>Sprzedanych</p>
            </div>
            {props.products.map((product, index) => (
                index < 3 ? <div className="Dashboard__latest-item">
                    <img
                        src={product.picture}
                        alt="But"/>
                    <span>{product.id}</span>
                    <span>{`${product.firm} ${product.model}`}</span>
                    <span>{product.price} zł</span>
                    <span>{product.quantity_sells}</span>
                </div> : null
            ))}
        </div>
    )
}