import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/state';

const Dialogs = (props) => {
  // debugger;
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

  let newMessageElement = React.createRef();

  let AddMessage = () => {
    props.dispatch(addMessageActionCreator());
    // debugger;
  };

  let onMessagePost = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
    // debugger;
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onMessagePost} ref={newMessageElement}
  value={props.dialogsPage.newPostMessage}/>
        </div>
        <div>
          <button onClick={AddMessage}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;