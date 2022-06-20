import React from "react";
import './Products.css';
import {ProductList} from "../../components/Products/ProductList";

export const Products = () => {
    return (
        <div className="page">

            <div className="Products__header">
                <h1>Produkty</h1>
                <form>
                    <input type="search" className="SearchForm SearchProduct" placeholder="Znajdź produkt..."/>
                </form>
            </div>

            <div className="Products__sort">
                <form>
                    <h3>Sortuj po</h3>
                    <select>
                        <option value="-">-</option>
                        <option value="najnowszych">najnowszych</option>
                        <option value="najstarszych">najstarszych</option>
                        <option value="alfabetycznie">alfabetycznie</option>
                        <option value="najdrozszych">najdrozszych</option>
                        <option value="najtanszych">najtanszych</option>
                    </select>
                </form>
            </div>

            <ProductList/>

        </div>
    )
}