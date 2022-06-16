import React, {useEffect, useState} from 'react';
import {Trash} from "@styled-icons/boxicons-solid";

export const CategoryList = () => {

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
        <div className="Category">
            {data.map(({id, image, name}) => (
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
            )}
        </div>

    )
}