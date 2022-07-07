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