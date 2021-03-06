import React, {SyntheticEvent, useEffect, useState} from "react";
import './Category.css';
import {CategoryList} from "../../components/Category/CategoryList";
import {CategoryAddForm} from "../../components/Category/CategoryAddForm";
import {Data} from "types";
import {Notification} from "../../components/common/Notification/Notification";
import {addItem, closeNotification, deleteItem, getItems} from "../../helpers/functions";

export const Category = () => {

    const [data, setData] = useState([]);

    const [formData, setFormData] = useState<Data>({
        id: '',
        name: '',
        image: '',
    });

    const [mess, setMess] = useState<string>('');
    const [success, setSuccess] = useState<boolean | null>(null)

    useEffect(() => {
        getItems('http://localhost:3001/category', setData);
    }, [])

    const handleSubmit = (e: SyntheticEvent) => {

        e.preventDefault();

        if (formData.name.length >= 50 || formData.name.length === 0) {
            setMess('Pole nazwy nie moze być puste lub nie moze przekroczyć 50 znaków')
            setSuccess(false);
            closeNotification(setSuccess);
            return
        }
        if (formData.image.length >= 200 || formData.image.length === 0) {
            setMess('Link do obrazka nie moze być pusty lub dluzszy niz 200 znaków!')
            setSuccess(false)
            closeNotification(setSuccess)
            return
        } else {
            addItem(formData, 'http://localhost:3001/category/add');
            setMess('Dodano kategorię do bazy')
            setSuccess(true)
            const newData = [...data, formData];
            // @ts-ignore
            setData(newData);
            closeNotification(setSuccess)
            setFormData({
                name: '',
                image: ''
            })
            setTimeout(()=> {
                window.location.reload()
            }, 3000)
        }
    }

    const deleteClick = (e: SyntheticEvent) => {
        // @ts-ignore
        const delItem = e.currentTarget.parentNode.parentNode.parentNode.id;
        // @ts-ignore
        const nameDelItem = e.currentTarget.parentNode.parentNode.parentNode.dataset.name;

        if(window.confirm(`Czy na pewno chcesz usunąć kategorię ${nameDelItem} ?`)) {
            deleteItem(delItem, 'http://localhost:3001/category/delete/')
            setMess(`Usunięto kategorię ${nameDelItem} z bazy`)
            setSuccess(false)
            // @ts-ignore
            const newData = [...data].filter(item=> item.id !== delItem);
            setData(newData);
            closeNotification(setSuccess)
        } else {
            return
        }

    }

    return (
        <div className="page">
            <CategoryAddForm submitForm={handleSubmit} data={formData} setData={setFormData}/>
            <CategoryList data={data} delete={deleteClick}/>
            <Notification msg={mess} succ={success}/>
        </div>
    )
}