import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;



// старый вариант через контенерную компоненту
// const DialogsContainer = () => {
//   // debugger;
//   return (
//       <StoreContext.Consumer>
//         { store => {
//
//           let state = store.getState().dialogsPage;
//
//           let onSendMessageClick = () => {      // отправка сообщения
//             store.dispatch(sendMessageCreator());
//           };
//
//           let onNewMessageChange = (body) => {     // изменение текста
//             store.dispatch(updateNewMessageBodyCreator(body));
//           };
//
//           return <Dialogs updateNewMessageBody={onNewMessageChange}
//                           sendMessage={onSendMessageClick}
//                           dialogsPage={state}/>;
//         }
//         }
//       </StoreContext.Consumer>
//   );
// };
