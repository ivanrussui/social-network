import styles from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers ( [
      {id: 1, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: false, name: 'Ivan', status: 'Hello World', location: {country: 'Russia', city: 'Moscow'}},
      {id: 2, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: false, name: 'Dmitry', status: 'Yo Yo Yo', location: {country: 'Belarus', city: 'Minsk'}},
      {id: 3, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: true, name: 'Fedor', status: 'I am programmer', location: {country: 'Moldova', city: 'Kishinev'}},
      {id: 4, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: true, name: 'Vasily', status: 'Hi Developers', location: {country: 'USA', city: 'New York'}}
    ])
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <div>
          <img className={styles.userImg} src={u.imgSrc} alt="user"/>
          { u.followed
            ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
            : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
          }
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