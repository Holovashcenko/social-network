import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showUser } from "../../redux/profileReducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
};

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
  }
}

export default compose(connect(mapStateToProps, { showUser }), withRouter, withAuthRedirect)(ProfileContainer)
