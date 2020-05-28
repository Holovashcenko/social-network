import { addMessageActionCreator, udateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    udateNewMessageText: (text) => dispatch(udateNewMessageTextActionCreator(text))
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
