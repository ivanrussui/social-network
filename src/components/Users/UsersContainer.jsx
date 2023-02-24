import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import {
    followThunk,
    unfollowThunk,
    getUsersThunk
} from "../../redux/usersReducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers,
} from '../../redux/usersSelectors';


// классовая компонента делающая гет запросы и передающая параметры чистой функции Users
class UsersContainer extends React.Component {
    componentDidMount() {
        // обращаемся к Thunk
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunk(currentPage, pageSize);
    }

    // изменение (переключение) страницы
    onPageChanged = (pageNumber) => {
        // обращаемся к Thunk
        const {pageSize} = this.props;
        this.props.getUsersThunk(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Spinner/> :
                <Users totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.followThunk}
                       unfollow={this.props.unfollowThunk}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {followThunk, unfollowThunk, getUsersThunk}),
    // withAuthRedirect
)(UsersContainer);

