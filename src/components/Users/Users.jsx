import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, onPageChanged, totalCount, pageSize, users, ...props}) => {
    return (
        <div className={styles.users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalCount} pageSize={pageSize}/>
            {users.map(u => (
                <User key={u.id} user={u} unfollow={props.unfollow} follow={props.follow} id={props.id}
                      followingInProgress={props.followingInProgress}/>
            ))}
        </div>
    )
};

export default Users;