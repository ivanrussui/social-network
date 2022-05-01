// обернули в переменные action type из action creator
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case SEND_MESSAGE: // добавление постов-сообщений Messages / альтернатива
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 6, message: body});
      return state;
    case UPDATE_NEW_MESSAGE_BODY: // обновление ввода текста в посты-сообщения Messages / альтернатива
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
}

// наши actionCreator
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;