import styles from './Users.module.css';
import userAva from '../../assets/img/user.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {
  // debugger
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) { // условие чтобы 1000+ страниц не было
      pages.push(i);
    }
    // pages.push(i);
  }

  return <div className={styles.users}>
    <div>
      { pages.map(p => {
        return <span className = {props.currentPage === p && styles.selectedPage}
        onClick={ (e) => { props.onPageChanged(p); }}>{p}</span>
      }) }
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <div>
          <NavLink to={'/profile/' + u.id}>
            <img className={styles.userImg} src={u.photos.small != null ? u.photos.small : userAva} alt="user"/>
            { u.followed
              ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
              : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
            }
          </NavLink>
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
};

export default Users;