import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Vlad" },
        { id: 2, name: "Alla" },
        { id: 3, name: "Anyta" },
        { id: 4, name: "Archy" },
    ];

    let messagesData = [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "AnytFine. Thanks! And you?a" },
        { id: 4, message: "I'm fine, too. Thank you!" },
        { id: 5, message: "I'm fine, too. Thank you!" },
        { id: 6, message: "I'm fine, too. Thank you!" },
        { id: 7, message: "I'm fine, too. Thank you!" },
        { id: 8, message: "I'm fine, too. Thank you!" },
        { id: 9, message: "I'm fine, too. Thank you!" },
        { id: 10, message: "I'm fine, too. Thank you!" }
    ];

    let dialogsElements = dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} />
    ));

    let messagesElements = messagesData.map((message) => (
        <Message message={message.message} id={message.id} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
