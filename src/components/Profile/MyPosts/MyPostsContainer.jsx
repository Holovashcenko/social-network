import React from "react";
import { addPostActionCreator, udateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profile.postData,
    newPostText: state.profile.newPostText
  } 
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    udateNewPostText: text => dispatch(udateNewPostTextActionCreator(text))
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
