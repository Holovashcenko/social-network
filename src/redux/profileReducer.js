import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let intialState = {
  postData: [
    { id: 1, message: "Hi! How are you?", counterLikes: 23 },
    { id: 2, message: "It's my first post!", counterLikes: 0 },
  ],
  newPostText: "",
  profile: null
};

const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, { id: 3, message: state.newPostText, counterLikes: 0 }]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const udateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}) 

export const showUser = (userId) => (dispatch) => {
    if (!userId) {
      userId = 8348;
    }
    profileAPI.showUserProfile(userId).then(data => {
      dispatch(setUserProfile(data));
      });
}

export default profileReducer;
