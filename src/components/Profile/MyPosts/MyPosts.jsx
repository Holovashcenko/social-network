import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div><textarea name="" id=""></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        <Post message="Hi! How are you?" counterLikes="23" />
        <Post message="It's my first post!" counterLikes="0" />
      </div>
    </div>
  );
}

export default MyPosts;
