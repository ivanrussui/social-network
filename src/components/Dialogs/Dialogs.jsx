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

    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Melissa'},
        {id: 4, name: 'Kristina'},
        {id: 5, name: 'Vladimir'},
        {id: 6, name: 'Alexandra'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'My name is Ivan'},
        {id: 3, message: 'And you'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;