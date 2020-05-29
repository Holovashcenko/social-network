import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter your massage"} />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  )
}

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.dialogsData.map((dialog) =>
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img} />);
  let messagesElements = props.dialogs.messagesData.map((message) =>
    <Message message={message.message} key={message.id} id={message.id} />);
  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>
          {messagesElements}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;
