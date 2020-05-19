const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let intialState = {
  postData: [
    { id: 1, message: "Hi! How are you?", counterLikes: 23 },
    { id: 2, message: "It's my first post!", counterLikes: 0 },
  ],
  newPostText: "",
};

const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 3, message: state.newPostText, counterLikes: 0 };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state }
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;

  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const udateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
