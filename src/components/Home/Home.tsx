import React from "react";
import {Menu} from "../Menu/Menu";
import {Routing} from "../Routing/Routing";
import {Bell, Envelope} from "@styled-icons/boxicons-regular";
import man from '../../assets/img/man.png';
import './Home.css';
import {Logo} from "../Logo/Logo";

export const Home = () => {

    return (
        <div className="Home">
            <header>
                <form>
                    <input type="search" placeholder="Search..."/>
                </form>
                <div>
                    <Bell size="20"/>
                </div>
                <div>
                    <Envelope size="20"/>
                </div>
                <div>
                    <span><img src={man} alt="Avatar"/></span>
                </div>
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