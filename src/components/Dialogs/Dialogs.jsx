import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';
import {
  addMessageActionCreator, sendMessageCreator,
  updateNewMessageBodyCreator,
  updateNewMessageTextActionCreator
} from '../../redux/state';

const Dialogs = (props) => {
  // debugger;
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody;

  // let newMessageElement = React.createRef();

  // let AddMessage = () => {
  //   props.dispatch(addMessageActionCreator());
  // };

  // let onMessagePost = () => {
  //   let text = newMessageElement.current.value;
  //   let action = updateNewMessageTextActionCreator(text);
  //   props.dispatch(action);
  // };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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