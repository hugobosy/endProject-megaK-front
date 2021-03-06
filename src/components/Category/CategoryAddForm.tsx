import React, {Dispatch, SyntheticEvent} from "react";
import {Data} from "types";

interface Props {
    submitForm: (e: SyntheticEvent) => void,
    data: Data,
    setData: Dispatch<Data>,
}

export const CategoryAddForm = (props: Props) => {

    return (
        <div className="Category__header">
            <h1>Kategorie</h1>
            <div>
                <form action="/category/add" onSubmit={props.submitForm}>

                    <label>Dodaj nową kategorię</label>
                    <p>
                        <input type="text" value={props.data.name} onChange={e => props.setData({...props.data, name: e.target.value})}/>
                    </p>
                    <label>Dodaj adres odnośnika do obrazka reprezentującego kategorię</label>
                    <p>
                        <input type="text" value={props.data.image} onChange={e => props.setData({...props.data, image: e.target.value})}/>
                    </p>

                    <button type="submit">Dodaj</button>
                </form>

            </div>
        </div>
    )
}