import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import {follow, setCurrentPage, setTotalCount, setUsers, unfollow, toggleIsFetching} from "../../redux/usersReducer";

// классовая компонента делающая гет запросы и передающая параметры чистой функции Users
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true); // spinner = true
    // получаем юзеров с сервера
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false); // spinner = false
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  // изменение (переключение) страницы
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true); // spinner = true
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false); // spinner = false
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    // console.log(this.props)
    return <>
      {this.props.isFetching ?
        <Spinner/> :
        <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChanged={this.onPageChanged}
        />}
    </>
  }
}

// функция принимающая весь state приложения
let mapStateToProps = (state) => {
  return {             // возвращает объект с данными которые нам нужны
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// функция передает компоненте через props callback
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setTotalCountActionCreator(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     }
//   }
// }


export default connect(mapStateToProps,
  // вместо функции mapDispatchToProps с диспатчами, коллбэками...
  // делаем объектами, они ссылаются на объекты actionCreator в редаксе и все работает благодаря connect пример follow: follow
  // ! Важная справка: если передавать в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента
  {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching}
)(UsersContainer);
