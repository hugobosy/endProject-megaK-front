import React, {MouseEventHandler} from 'react';
import {Trash} from "@styled-icons/boxicons-solid";
import {Data} from "types";

interface Props {
    data: Data[],
    delete: MouseEventHandler
}

export const CategoryList = (props:Props) => {
    const {data} = props;
    return (
        <div className="Category">
            {data.map(({id, image, name}) => (
                    <div className="Category__item" key={id} id={id} data-name={name}>
                        <img
                            src={image}
                            alt={name}/>
                        <div className="Category__content">
                            <h2>{name}</h2>
                            <span><Trash size="30" color="red" cursor="pointer" onClick={props.delete}/></span>
                        </div>
                    </div>
                )
            )}
        </div>
    //todo dodanie sortowania kategorii
    )
}