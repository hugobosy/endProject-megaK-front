import React from "react";
import {menuLinks} from "../../helpers/links";
import {Link} from "react-router-dom";
import './Menu.css';

export const Menu = () => {
    const menu = menuLinks.map(menuLink => {
        return (
            <li
                key={menuLink.link}
                className="Menu"
            >

                {menuLink.icon}
                <Link to={menuLink.link} className="Menu__link">{menuLink.name}</Link>
            </li>
        )
    })

    return (
        <>
            {menu}
        </>
    )
}