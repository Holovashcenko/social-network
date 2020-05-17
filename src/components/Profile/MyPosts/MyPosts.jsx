import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, udateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let postElements = props.state.postData.map((post) => <Post message={post.message} id={post.id} counterLikes={post.counterLikes} /> );
  let newPostElement = React.createRef();
  let addPost = () => props.dispatch(addPostActionCreator());
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(udateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
