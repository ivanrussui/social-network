import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import avatar from '../../../assets/img/avatar-name.jpg';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${s.dialog} + ${s.active}`}>
            <img
                srcSet={avatar}
                alt={"avatar"}
            />
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
};

export default DialogItem;