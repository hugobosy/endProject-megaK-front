import React from "react";
import {menuLinks} from "../../helpers/links";

export const Menu = () => {
    const menu = menuLinks.map(link => <li key={link.link}>{link.name}</li>)

    return (
        <>
            {menu}
        </>
    )
}