import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <div className={s.dialog + " " + s.active}>
        <NavLink to="/dialogs/1">Vladyslav</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/2">Alla</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/3">Anyta</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/4">Archy</NavLink>
      </div>
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
