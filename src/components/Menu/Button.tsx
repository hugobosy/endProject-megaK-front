import React from "react";
import {LockAlt, LockOpenAlt} from "@styled-icons/boxicons-regular";
import './Button.css';

interface Props {
    state: boolean,
    handleClick: () => void,
}

export const Button = (props:Props) => {

    return (
        <button className="Button" onClick={props.handleClick}>
            {props.state ? <LockOpenAlt size="30"/> : <LockAlt size="30"/>}
        </button>
    )
}