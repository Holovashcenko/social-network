import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let intialState = {
  postData: [
    { id: 1, message: "Hi! How are you?", counterLikes: 23 },
    { id: 2, message: "It's my first post!", counterLikes: 0 },
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [...state.postData, { id: 3, message: action.newPostText, counterLikes: 0 }]
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const showUser = (userId) => (dispatch) => {
  profileAPI.showUserProfile(userId).then(data => {
    dispatch(setUserProfile(data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
}

export default profileReducer;
