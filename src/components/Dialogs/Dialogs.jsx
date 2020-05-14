import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Vlad" id="1" />
                <DialogItem name="Alla" id="2" />
                <DialogItem name="Anyta" id="3" />
                <DialogItem name="Archy" id="4" />
            </div>
            <div className={s.messages}>
                <Message message="Hello" />
                <Message message="How are you?" />
                <Message message="Fine. Thanks! And you?" />
                <Message message="I'm fine, too. Thank you!" />
            </div>
        </div>
    );
}

export default Dialogs;
