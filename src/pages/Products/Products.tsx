import React, {useEffect, useState} from "react";
import './Products.css';
import {ProductList} from "../../components/Products/ProductList";
import {ProductSort} from "../../components/Products/ProductSort";
import {SearchProduct} from "../../components/Products/SearchProduct";

export const Products = () => {

    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setProduct(await data)
    }

    useEffect(()=>{
        getProducts()
    }, [])

    console.log(product)
    return (
        <div className="page">

            <div className="Products__header">
                <h1>Produkty</h1>
                <SearchProduct/>
            </div>

            <ProductSort/>

            <ProductList products={product}/>

        </div>
    )
}