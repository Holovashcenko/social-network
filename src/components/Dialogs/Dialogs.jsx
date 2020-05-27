import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.dialogsData.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img} />);
  let messagesElements = props.dialogs.messagesData.map((message) => <Message message={message.message} key={message.id} id={message.id} />);
  let newMessageText = props.dialogs.newMessageText;
  let addMessage = () => props.addMessage();
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.udateNewMessageText(text);
  }
  if (!props.isAuth) return <Redirect to="/login" />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <div>
            <textarea onChange={onMessageChange} value={newMessageText} placeholder="Enter your massage" />
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
