import React from "react";
import './Notification.css';

interface Props {
    msg: string
    succ: boolean | null
}

export const Notification = (props: Props) => (
    <div className="notification" style={props.succ === null ? {right: '-250px', opacity: 0} : props.succ ? {right: 0, backgroundColor: 'green'} : {right: 0, backgroundColor: 'red'}}>
        <h4>{props.msg}</h4>
    </div>
)
