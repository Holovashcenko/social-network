import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
  _callSubscriber() { console.log("state changed") },
  getState() { return this._state },
  subscribe(observer) { this._callSubscriber = observer },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._callSubscriber(this._state);
  },
};

export default store;
