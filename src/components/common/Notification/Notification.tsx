import React from "react";
import './Notification.css';

interface Props {
    msg: string
    succ: boolean | null
}

export const Notification = (props: Props) => (
    <div className="notification" style={props.succ ? {right: 0} : {right: '0'}}>
        <h4>{props.msg}</h4>
    </div>
)
