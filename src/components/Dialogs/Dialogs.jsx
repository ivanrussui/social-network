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

    let dialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Melissa'},
        {id: 4, name: 'Kristina'},
        {id: 5, name: 'Vladimir'},
        {id: 6, name: 'Alexandra'}
    ]

    let messageData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'My name is Ivan'},
        {id: 3, message: 'And you'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;