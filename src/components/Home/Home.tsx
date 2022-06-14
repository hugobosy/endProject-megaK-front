import React, {useState} from "react";
import {Menu} from "../Menu/Menu";
import {Routing} from "../Routing/Routing";
import {Bell, Envelope} from "@styled-icons/boxicons-regular";
import './Home.css';
import {Logo} from "../Logo/Logo";
import {SearchForm} from "../SearchForm/SearchForm";
import {Avatar} from "../Avatar/Avatar";
import {Button} from "../Menu/Button";

export const Home = () => {

    const [open, setOpen] = useState(true);

    const handleState = ():void => {
        setOpen(!open)
    }

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
            <aside style={open ? {left: 0} : {left: '-300px'}}>
                <Button handleClick={handleState} state={open}/>
                <Logo/>
                <ul>
                    <Menu/>
                </ul>
            </aside>
            <main style={open ? {left: 0} : {left: '-300px', width: 'calc(100% + 300px)'}}>
                <Routing/>
            </main>
        </div>
    )
}