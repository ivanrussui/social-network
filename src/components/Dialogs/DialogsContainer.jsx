import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  // debugger;
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {      // отправка сообщения
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {     // изменение текста
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  dialogsPage={state} />
};

export default DialogsContainer;