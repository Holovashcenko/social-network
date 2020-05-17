import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, udateNewMessageTextActionCreator } from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);
  let messagesElements = props.state.messagesData.map((message) => <Message message={message.message} id={message.id} />);
  let addMessage = () => props.dispatch(addMessageActionCreator())
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(udateNewMessageTextActionCreator(text));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <div>
            <textarea onChange={onMessageChange} value={props.state.newMessageText} />
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
