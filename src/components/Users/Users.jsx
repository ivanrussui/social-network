import styles from './Users.module.css';

const Users = (props) => {
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <div>
          <img className={styles.userImg} src={u.imgSrc} alt="user"/>
          <button>follow</button>
        </div>

        <div>

          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>

          <div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>

        </div>

      </div>)
    }
  </div>
};

export default Users;