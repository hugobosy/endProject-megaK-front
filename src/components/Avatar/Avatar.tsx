import React from "react";
import man from "../../assets/img/man.png";
import './Avatar.css';

export const Avatar = () => {
    return (
        <div className="Avatar">
            <img src={man} alt="Avatar"/>
        </div>
    )
}