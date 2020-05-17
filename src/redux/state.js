const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profile: {
      postData: [
        { id: 1, message: "Hi! How are you?", counterLikes: 23 },
        { id: 2, message: "It's my first post!", counterLikes: 0 },
      ],
      newPostText: "",
    },
    dialogs: {
      dialogsData: [
        {
          id: 1,
          name: "Vlad",
          img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
        },
        {
          id: 2,
          name: "Alla",
          img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
        },
        {
          id: 3,
          name: "Anyta",
          img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
        },
        {
          id: 4,
          name: "Archy",
          img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
        },
      ],
      messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Fine. Thanks! And you?" },
        { id: 4, message: "I'm fine, too. Thank you!" },
        { id: 5, message: "I'm fine, too. Thank you!" },
        { id: 6, message: "I'm fine, too. Thank you!" },
        { id: 7, message: "I'm fine, too. Thank you!" },
        { id: 8, message: "I'm fine, too. Thank you!" },
        { id: 9, message: "I'm fine, too. Thank you!" },
        { id: 10, message: "I'm fine, too. Thank you!" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = { id: 3, message: this._state.profile.newPostText, counterLikes: 0, };
      this._state.profile.postData.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profile.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = { id: 11,  message: this._state.dialogs.newMessageText, };
      this._state.dialogs.messagesData.push(newMessage);
      this._state.dialogs.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogs.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const udateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT,  newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const udateNewMessageTextActionCreator = text => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;
