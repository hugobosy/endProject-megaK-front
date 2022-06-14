import React from "react";
import {Menu} from "../Menu/Menu";
import {Routing} from "../Routing/Routing";
import {Bell, Envelope} from "@styled-icons/boxicons-regular";
import './Home.css';
import {Logo} from "../Logo/Logo";
import {SearchForm} from "../SearchForm/SearchForm";
import {Avatar} from "../Avatar/Avatar";

export const Home = () => {

    return (
        <div className="Home">
            <header>
                <SearchForm/>
                <div className="social">
                    <Bell size="20"/>
                </div>
                <div className="social">
                    <Envelope size="20"/>
                </div>
                <Avatar/>
            </header>
            <aside>
                <Logo/>
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