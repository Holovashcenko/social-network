import React from "react";
import { addPostActionCreator, udateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => props.store.dispatch(addPostActionCreator());
  let onPostChange = text => props.store.dispatch(udateNewPostTextActionCreator(text));
  return (
    <MyPosts
      udateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profile.postData}
      newPostText={state.profile.newPostText}
    />
  );
};

export default MyPostsContainer;
