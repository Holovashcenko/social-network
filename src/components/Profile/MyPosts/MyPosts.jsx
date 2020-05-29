import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newPostText"} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: "newPostText"
})(AddNewPostForm)

const MyPosts = (props) => {
  let postElements = props.postData.map((post) =>
    <Post message={post.message} key={post.id} id={post.id} counterLikes={post.counterLikes} />);
  let addPost = (values) => props.addPost(values.newPostText);

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={addPost} />
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
