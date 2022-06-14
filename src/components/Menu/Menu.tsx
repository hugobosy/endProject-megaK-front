import React from "react";
import {menuLinks} from "../../helpers/links";
import {NavLink} from "react-router-dom";
import './Menu.css';

export const Menu = () => {
    const menu = menuLinks.map(menuLink => {
        return (
            <NavLink to={menuLink.link} className="Menu" key={menuLink.link}>
                <li
                    className="Menu__link"
                >
                    {menuLink.icon}
                    {menuLink.name}
                </li>
            </NavLink>
        )
    })

    return (
        <>
            {menu}
        </>
    )
}