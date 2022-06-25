import React from 'react';
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

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

export default UsersAPIComponent;