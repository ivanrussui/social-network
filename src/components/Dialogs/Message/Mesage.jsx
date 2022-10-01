import React from 'react';
import s from './../Dialogs.module.css';
import avatar from '../../../assets/img/avatar-message.jpg';

const Message = (props) => {
    return (
        <div className={s.dialog}>
            <img
                srcSet={avatar}
                alt={"avatar"}
            />
            {props.message}
        </div>
    );
};

export default Message;