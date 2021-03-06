import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';

const Dialogs = (props) => {
  // debugger;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.name}/>);
  let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.message}/>);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {  // отправка сообщения
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {  // изменение текста
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea onChange={onNewMessageChange}
                      value={newMessageBody}
                      placeholder="Enter your message"/>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;