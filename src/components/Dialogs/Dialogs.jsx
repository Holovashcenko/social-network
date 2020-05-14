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
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Vlad" },
        { id: 2, name: "Alla" },
        { id: 3, name: "Anyta" },
        { id: 4, name: "Archy" }
    ];

    let messagesData = [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "AnytFine. Thanks! And you?a" },
        { id: 4, message: "I'm fine, too. Thank you!" }
    ];

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
};

export default Dialogs;
