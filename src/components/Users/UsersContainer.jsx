import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import {follow, setCurrentPage, setTotalCount, setUsers, unfollow, toggleIsFetching} from "../../redux/usersReducer";
import {usersAPI} from "../../api/api";

// классовая компонента делающая гет запросы и передающая параметры чистой функции Users
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true); // spinner = true

    // получаем юзеров с сервера
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        // debugger
        this.props.toggleIsFetching(false); // spinner = false
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }

  // изменение (переключение) страницы
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true); // spinner = true
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false); // spinner = false
        this.props.setUsers(data.items);
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


export default connect(mapStateToProps,
  // вместо функции mapDispatchToProps с диспатчами, коллбэками...
  // делаем объектами, они ссылаются на объекты actionCreator в редаксе и все работает благодаря connect пример follow: follow
  // ! Важная справка: если передавать в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента
  {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching}
)(UsersContainer);
