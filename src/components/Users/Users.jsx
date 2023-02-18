import styles from './Users.module.css';
import userAva from '../../assets/img/user.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    // debugger
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    // for (let i = 4120; i <= pagesCount; i++) {
    //   if (pages.length < 4200) { // условие чтобы 1000+ страниц не было
    //     pages.sort((a, b) => a - b).push(i);
    //   }
    // }

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 40) { // условие чтобы 1000+ страниц не было
            // pages.push(i);
            pages.sort((a, b) => a - b).push(i);
        }
    }

    return (
        <div className={styles.users}>
            <div>
                {pages.map(p => {
                    // return <span key={p} className={props.currentPage === p && styles.selectedPage}
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : null}
                                 onClick={() => {props.onPageChanged(p)}}>
                        {p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={styles.userImg} src={u.photos.small != null ? u.photos.small : userAva}
                                 alt="user"/>
                        </NavLink>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>
                                Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>
                                Follow</button>
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
    )
};

export default Users;