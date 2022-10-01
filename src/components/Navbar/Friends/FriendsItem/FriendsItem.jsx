import React from 'react';
import s from './FriendsItem.module.css';
import avatar from '../../../../assets/img/avatar-friends.jpg';

const FriendsItem = (props) => {

    return (
        <>
            <div className={s.friendsItem}>
                <img
                    srcSet={avatar}
                    alt="avatar"/>
                <div className={s.text}>
                    {props.name}
                </div>
            </div>
        </>
    );
};

export default FriendsItem;