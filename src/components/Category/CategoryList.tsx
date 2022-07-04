import React, {MouseEventHandler, SyntheticEvent, useState} from 'react';
import {Trash} from "@styled-icons/boxicons-solid";
import {Data} from "types";

interface Props {
    data: Data[],
    delete: MouseEventHandler
}

export const CategoryList = (props: Props) => {
    const {data} = props;

    const [select, setSelect] = useState('-')
    const [sortData, setSortData] = useState<Data[]>([])

    const sortCategory = (e: SyntheticEvent) => {
        // @ts-ignore
        setSelect(e.currentTarget.value)

        // @ts-ignore
        if (e.currentTarget.value === 'az') {
            setSortData([...data].sort((a, b) => {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
            }))
        } else { // @ts-ignore
            if (e.currentTarget.value === 'za') {
                setSortData([...data].sort((a, b) => {
                    if (a.name < b.name) return 1
                    if (a.name > b.name) return -1
                    return 0
                }))
            }
        }
    }

    return (
        <div>
            <div className="Category__sort">
                <label>Sortuj: </label>
                <select value={select} onChange={sortCategory}>
                    <option value="-">-</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            <div className="Category">
                {select === '-' ?
                    data.map(({id, image, name}) => (
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
                    )
                    : sortData.map(({id, image, name}) => (
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
        </div>
    )
}