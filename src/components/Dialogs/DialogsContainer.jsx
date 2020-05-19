import React from "react";
import { addMessageActionCreator, udateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let addMessage = () => props.store.dispatch(addMessageActionCreator());
  let udateNewMessageText = (text) => props.store.dispatch(udateNewMessageTextActionCreator(text));
  return (
    <Dialogs
      addMessage={addMessage}
      udateNewMessageText={udateNewMessageText}
      dialogs={state.dialogs.dialogsData}
      messages={state.dialogs.messagesData}
      newPostText={state.dialogs.newMessageText}
    />
  );
};

export default DialogsContainer;
