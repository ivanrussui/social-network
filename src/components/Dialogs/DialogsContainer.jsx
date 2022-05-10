import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  // debugger;

  return (
    <StoreContext.Consumer>
      { (store) => {

        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {      // отправка сообщения
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {     // изменение текста
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}/>;
      }
    }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;