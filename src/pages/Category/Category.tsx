import React, {ReactElement, useEffect, useState} from "react";
import {Trash} from "@styled-icons/boxicons-solid";
import './Category.css';

export const Category = (): ReactElement => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    async function getData(): Promise<void> {
        await fetch('http://localhost:3001/category')
            .then(res => res.json())
            .then(data => setData(data))
    }

    return (
        <div className="page">
            <div className="Category__header">
                <h1>Kategorie</h1>

                <form>

                    <label>Dodaj nową kategorię</label>
                    <p>
                        <input type="text"/>
                    </p>
                    <label>Dodaj adres odnośnika do obrazka reprezentującego kategorię</label>
                    <p>
                        <input type="text"/>
                    </p>

                    <button type="submit">Dodaj</button>
                </form>
            {/*    todo dodawanie kategorii bo bazy*/}
            </div>

            <div className="Category">
                {data.map(({id, image, name}) => {
                    return (
                        <div className="Category__item" key={id}>
                            <img
                                src={image}
                                alt={name}/>
                            <div className="Category__content">
                                <h2>{name}</h2>
                                <span><Trash size="30" color="red"/></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}