import React, {SyntheticEvent, useEffect, useState} from "react";
import './Products.css';
import {ProductList} from "../../components/Products/ProductList";
import {ProductSort} from "../../components/Products/ProductSort";
import {SearchProduct} from "../../components/Products/SearchProduct";
import {Product} from "types";
import {Notification} from "../../components/common/Notification/Notification";
import {AddProduct} from "../../components/Products/AddProduct";
import {EditProduct} from "../../components/Products/EditProduct";

export const Products = () => {

    const [product, setProduct] = useState<Product[]>([]);
    const [mess, setMess] = useState<string>('');
    const [success, setSuccess] = useState<boolean | null>(null);
    const [addActive, setAddActive] = useState<boolean>(false);
    const [editActive, setEditActive] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<string>('')

    const getProducts = async () => {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setProduct(await data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const closeNotification = () => {
        setTimeout(() => {
            setSuccess(null)
        }, 3000)
    }

    const handleClickButtonAddProduct = () => {
        setAddActive(true)
    }

    const deleteProduct = async (id: string) => {
        try {
            await fetch(`http://localhost:3001/products/delete/${id}`, {
                method: 'POST',
                body: JSON.stringify({id}),
                headers: {
                    'Content-type': 'application/json'
                },
            });
        } catch (e) {
            console.log('Bład usuwania', e)
        }
    }

    const handleDelete = (e: SyntheticEvent) => {

        const delItem = e.currentTarget.id;
        //@ts-ignore
        const nameDelItem = e.currentTarget.dataset.name
        deleteProduct(delItem)

        setMess(`Usunięto produkt ${nameDelItem} z bazy`)
        setSuccess(false)
        // @ts-ignore
        const newData = [...product].filter(item => item.id !== delItem);
        // @ts-ignore
        setProduct(newData);
        closeNotification()
    }
    // todo przy błedach usuwania itp postaraj się wyświetlać belkę z informacją

    const handleEdit = (e:SyntheticEvent) => {
        setEditActive(true)
        setEditItem(e.currentTarget.id)
    }

    return (
        <div className="page">

            <div className="Products__header">
                <h1>Produkty</h1>
                <button onClick={handleClickButtonAddProduct}>Dodaj produkt</button>
                <SearchProduct/>
            </div>

            <ProductSort/>

            <ProductList products={product} delete={handleDelete} edit={handleEdit}/>
            <Notification msg={mess} succ={success}/>
            {addActive ? <AddProduct close={setAddActive}/> : null}
            {editActive ? <EditProduct close={setEditActive} id={editItem} products={product}/> : null}

        </div>
    )
}