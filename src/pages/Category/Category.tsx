import React, {SyntheticEvent, useState} from "react";
import './Category.css';
import {CategoryList} from "../../components/Category/CategoryList";
import {CategoryAddForm} from "../../components/Category/CategoryAddForm";
import {Data} from "types";
import {Notification} from "../../components/common/Notification/Notification";

export const Category = () => {

    const [data, setData] = useState<Data>({
        name: '',
        image: '',
    });

    const [mess, setMess] = useState<string>('');
    const [success, setSuccess] = useState<boolean | null>(null)

    const close = () => {
        setTimeout(() => {
            setSuccess(null)
        }, 3000)
    }

    const addData = async () => {
        try {
            await fetch('http://localhost:3001/category/add', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (e) {
            console.log('Error', e)
        }
    }

    const handleSubmit = (e: SyntheticEvent) => {

        e.preventDefault();

        if (data.name.length >= 50 || data.name.length === 0) {
            setMess('Pole nazwy nie moze być puste lub nie moze przekroczyć 50 znaków')
            setSuccess(false);
            close();
            return
        }
        if (data.image.length >= 200 || data.image.length === 0) {
            setMess('Link do obrazka nie moze być pusty lub dluzszy niz 200 znaków!')
            setSuccess(false)
            close()
            return
        } else {
            addData();
            setMess('Dodano kategorię do bazy')
            setSuccess(true)
            close()
            setData({
                name: '',
                image: ''
            })
        }
    }

    return (
        <div className="page">
            <CategoryAddForm submitForm={handleSubmit} data={data} setData={setData}/>
            <CategoryList/>
            <Notification msg={mess} succ={success}/>
        </div>
    )
}