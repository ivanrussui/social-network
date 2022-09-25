import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsers
} from "../../redux/usersReducer";


// классовая компонента делающая гет запросы и передающая параметры чистой функции Users
class UsersContainer extends React.Component {
  componentDidMount() {
    // обращаемся к Thunk
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  // изменение (переключение) страницы
  onPageChanged = (pageNumber) => {
    // обращаемся к Thunk
    this.props.getUsers(pageNumber, this.props.pageSize);
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
               followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


export default connect(mapStateToProps,
  // Вместо функции mapDispatchToProps с диспатчами, коллбэками...
  // делаем объектами, они ссылаются на объекты actionCreator в редаксе и все работает благодаря connect пример follow: follow
  // ! Важная справка: если передавать в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента
  {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}
)(UsersContainer);
