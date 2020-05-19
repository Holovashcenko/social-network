import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => <Post message={post.message} id={post.id} counterLikes={post.counterLikes} /> );
  let newPostText = props.newPostText;
  let addPost = () => props.addPost();
  let onPostChange = (e) => {
    let text = e.target.value;
    props.udateNewPostText(text);
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={newPostText} placeholder="Enter your post" />
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
