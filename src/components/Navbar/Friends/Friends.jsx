import React from 'react';
import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
  debugger;

  let friendsElements = props.friends.map(p => <FriendsItem name={p.name} key={p.id} /> )

  return (
    <div>
      <div className={s.friends} >
        Friends
      </div>
      <div className={s.friendsItems}>
      {friendsElements}
        </div>
    </div>

  );
};

export default Friends;