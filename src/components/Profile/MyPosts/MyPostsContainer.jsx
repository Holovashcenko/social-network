import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profile.postData,
    newPostText: state.profile.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
