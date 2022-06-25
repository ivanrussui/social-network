import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreator,
  unfollowActionCreator
} from "../../redux/usersReducer";

// классовая компонента делающая гет запросы и передающая параметры чистой функции Users
class UsersContainer extends React.Component {

  componentDidMount() {
    // получаем юзеров с сервера
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  // изменение (переключение) страницы
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    // console.log(this.props)
    return <Users totalCount={this.props.totalCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  onPageChanged={this.onPageChanged}
    />
  }
}

// функция принимающая весь state приложения
let mapStateToProps = (state) => {
  return {             // возвращает объект с данными которые нам нужны
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
}

// функция передает презентационной компоненте через props callback
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountActionCreator(totalCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
