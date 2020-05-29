const ADD_MESSAGE = "ADD-MESSAGE";

let intialState = {
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
  ]
};

const dialogsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 11, message: action.newMessageText }]
      }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export default dialogsReducer;