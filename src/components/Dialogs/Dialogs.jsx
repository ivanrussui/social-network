import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={`${s.dialog} + ${s.active}`}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.dialog}> {props.message} </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Ivan' id='1'/>
                <DialogItem name='Anna' id='2'/>
                <DialogItem name='Melissa' id='3'/>
                <DialogItem name='Kristina' id='4'/>
                <DialogItem name='Vladimir' id='5'/>
                <DialogItem name='Alexandra' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='My name is Ivan'/>
                <Message message='And you?'/>
            </div>
        </div>
    )
}

export default Dialogs;