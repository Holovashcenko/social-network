import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showUser } from "../../redux/profileReducer"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 8348;
    }
    this.props.showUser(userId)
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
};

let mapStateToProps = (state) => {
  return{profile: state.profile.profile}
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, { showUser })(WithUrlDataContainerComponent)
