import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Prealoader/Prealoder";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers })
)(UsersContainer);