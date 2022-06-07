import React from 'react';
import styles from './Users.module.css';
import * as axios from "axios";
import userAva from '../../assets/img/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    });
  }

  render() {
    return <div className={styles.users}>
      {
        this.props.users.map(u => <div key={u.id}>
          <div>
            <img className={styles.userImg} src={u.photos.small != null ? u.photos.small : userAva} alt="user"/>
            { u.followed
              ? <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
              : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button>
            }
          </div>

          <div className={styles.userInfo}>

            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>

            <div>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </div>

          </div>

        </div>)
      }
    </div>
  }
}

export default Users;