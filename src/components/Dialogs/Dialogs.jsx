import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + " " + s.active}>Vladyslav</div>
            <div className={s.dialog}>Alla</div>
            <div className={s.dialog}>Anyta</div>
            <div className={s.dialog}>Archy</div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hello!</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Fine. Thanks! And you?</div>
            <div className={s.message}>I'm fine, too. Thank you!</div>
        </div>
    </div>
);

export default Dialogs;
