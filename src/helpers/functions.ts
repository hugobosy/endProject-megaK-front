import {Dispatch, SetStateAction} from "react";

export const getItems = async (url: string, setstate: Dispatch<SetStateAction<any>>) => {
    const res = await fetch(url);
    const data = res.json();
    setstate(await data);
}

export const closeNotification = (setstate: Dispatch<SetStateAction<boolean | null>>) => {
    setTimeout(() => {
        setstate(null)
    }, 1500)
}

export const deleteItem = async(id: string, link: string) => {
    await fetch(`${link}${id}`, {
        method: 'POST',
        body: JSON.stringify({id}),
        headers: {
            'Content-type': 'application/json',
        },
    })
}

export const addItem = async(data: any, link: string) => {
    await fetch(link, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}