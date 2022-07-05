import React, {SyntheticEvent, useEffect, useState} from "react";
import './Category.css';
import {CategoryList} from "../../components/Category/CategoryList";
import {CategoryAddForm} from "../../components/Category/CategoryAddForm";
import {Data} from "types";
import {Notification} from "../../components/common/Notification/Notification";

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
        getData();
    }, [])

    async function getData(): Promise<void> {
        await fetch('http://localhost:3001/category')
            .then(res => res.json())
            .then(data => setData(data))
    }

    const closeNotification = () => {
        setTimeout(() => {
            setSuccess(null)
        }, 3000)
    }
    // @todo wyeksportuj funckje closeNotification do osobnego pliku
    const addData = async () => {
        try {
            await fetch('http://localhost:3001/category/add', {
                method: 'POST',
                body: JSON.stringify(formData),
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

        if (formData.name.length >= 50 || formData.name.length === 0) {
            setMess('Pole nazwy nie moze być puste lub nie moze przekroczyć 50 znaków')
            setSuccess(false);
            closeNotification();
            return
        }
        if (formData.image.length >= 200 || formData.image.length === 0) {
            setMess('Link do obrazka nie moze być pusty lub dluzszy niz 200 znaków!')
            setSuccess(false)
            closeNotification()
            return
        } else {
            addData();
            setMess('Dodano kategorię do bazy')
            setSuccess(true)
            const newData = [...data, formData];
            // @ts-ignore
            setData(newData);
            closeNotification()
            setFormData({
                name: '',
                image: ''
            })
            setTimeout(()=> {
                window.location.reload()
            }, 3000)
        }
    }

    const deleteData = async(item: string) => {
        try {
            await fetch(`http://localhost:3001/category/delete/${item}`, {
                method: 'POST',
                body: JSON.stringify({item}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (e) {
            console.log('Błąd usuwania', e)
        }
    }

    const deleteClick = (e: SyntheticEvent) => {
        // @ts-ignore
        const delItem = e.currentTarget.parentNode.parentNode.parentNode.id;
        // @ts-ignore
        const nameDelItem = e.currentTarget.parentNode.parentNode.parentNode.dataset.name;

        if(window.confirm(`Czy na pewno chcesz usunąć kategorię ${nameDelItem} ?`)) {
            deleteData(delItem)
            setMess(`Usunięto kategorię ${nameDelItem} z bazy`)
            setSuccess(false)
            // @ts-ignore
            const newData = [...data].filter(item=> item.id !== delItem);
            setData(newData);
            closeNotification()
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