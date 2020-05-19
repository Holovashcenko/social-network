import React from "react";
import { addMessageActionCreator, udateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState().dialogs;
          let addMessage = () => store.dispatch(addMessageActionCreator());
          let udateNewMessageText = text => store.dispatch(udateNewMessageTextActionCreator(text));
          return (
            <Dialogs
              addMessage={addMessage}
              udateNewMessageText={udateNewMessageText}
              dialogs={state.dialogsData}
              messages={state.messagesData}
              newMessageText={state.newMessageText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
