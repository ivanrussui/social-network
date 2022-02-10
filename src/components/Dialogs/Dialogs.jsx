import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={`${s.dialog} + ${s.active}`}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Vladimir
                </div>
                <div className={s.dialog}>
                    Kristina
                </div>
                <div className={s.dialog}>
                    Vasilyi
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>My name is Ivan</div>
                <div className={s.message}>And you?</div>
            </div>
        </div>
    )
}

export default Dialogs;