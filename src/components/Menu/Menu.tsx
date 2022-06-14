import React from "react";
import {menuLinks} from "../../helpers/links";
import {Link} from "react-router-dom";

export const Menu = () => {
    const menu = menuLinks.map(link => <li key={link.link}><Link to={link.link}>{link.name}</Link></li>)

    return (
        <>
            {menu}
        </>
    )
}