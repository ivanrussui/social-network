import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';

const Dialogs = (props) => {

  let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
  let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;