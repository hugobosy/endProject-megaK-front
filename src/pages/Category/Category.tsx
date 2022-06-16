import React, {SyntheticEvent, useState} from "react";
import './Category.css';
import {CategoryList} from "../../components/Category/CategoryList";
import {CategoryAddForm} from "../../components/Category/CategoryAddForm";
import {Data} from "types";
import {Spinner} from "../../components/common/Spinner/Spinner";

export const Category = () => {

    const [data, setData] = useState<Data>({
        name: '',
        image: '',
    })

    const [info, setInfo] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e:SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch('http://localhost:3001/category/add', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const info = await res.json();

            setInfo(`Kategoria ${info.name} została pomyślnie dodana do bazy`)

        } catch (e) {
            setInfo(`Nieznany błąd`)
        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return <Spinner/>
    }
    const handleClick = () => {

    }

    return (
        <div className="page">
            <CategoryAddForm submitForm={handleSubmit} data={data} setData={setData} click={handleClick}/>
            <CategoryList/>
        </div>
    )
}