import React from "react";
import {menuLinks} from "../../helpers/links";
import {Link} from "react-router-dom";

export const Menu = () => {
    const menu = menuLinks.map(menuLink => {
        return <li key={menuLink.link}>{menuLink.icon}<Link to={menuLink.link}>{menuLink.name}</Link></li>
    })

    return (
        <>
            {menu}
        </>
    )
}