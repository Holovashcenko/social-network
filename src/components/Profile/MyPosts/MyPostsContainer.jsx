import { addPost, udateNewPostText } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profile.postData,
    newPostText: state.profile.newPostText
  } 
}

const MyPostsContainer = connect(mapStateToProps, {addPost, udateNewPostText})(MyPosts)

export default MyPostsContainer;
