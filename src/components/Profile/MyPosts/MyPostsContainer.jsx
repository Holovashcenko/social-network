import React from "react";
import { addPostActionCreator, udateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState().profile;
          let addPost = () => store.dispatch(addPostActionCreator());
          let onPostChange = text => store.dispatch(udateNewPostTextActionCreator(text));
          return (
            <MyPosts
              udateNewPostText={onPostChange}
              addPost={addPost}
              posts={state.postData}
              newPostText={state.newPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
