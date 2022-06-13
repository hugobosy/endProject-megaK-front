import React from "react";
import { Menu } from "../Menu/Menu";
import {Routing} from "../Routing/Routing";

export const Home = () => {



    return (
        <div className="Home">
            <header>

            </header>
            <aside>
                <div>Logo</div>
                <ul>
                    <Menu/>
                </ul>
            </aside>
            <main>
                <Routing/>
            </main>
        </div>
    )
}