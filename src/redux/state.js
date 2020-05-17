import { rerenderEntireTree } from "./../render";

let state = {
  profile: {
    postData: [
      { id: 1, message: "Hi! How are you?", counterLikes: 23 },
      { id: 2, message: "It's my first post!", counterLikes: 0 },
    ],
    newPostText: "",
  },

  dialogs: {
    dialogsData: [
      { id: 1, name: "Vlad", img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" },
      { id: 2, name: "Alla",img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" },
      { id: 3, name: "Anyta", img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" },
      { id: 4, name: "Archy", img: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" },
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
};

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profile.newPostText,
    counterLikes: 0,
  };

  state.profile.postData.push(newPost);
  state.profile.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 11,
    message: state.dialogs.newMessageText,
  };

  state.dialogs.messagesData.push(newMessage);
  state.dialogs.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogs.newMessageText = newText;
  rerenderEntireTree(state);
};

export default state;
