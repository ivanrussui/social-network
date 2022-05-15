// обернули в переменные action type из action creator
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogs: [
    {id: 1, name: 'Ivan'}, {id: 2, name: 'Anna'}, {id: 3, name: 'Melissa'}, {id: 4, name: 'Kristina'},
    {id: 5, name: 'Vladimir'}, {id: 6, name: 'Alexandra'}
  ],
  messages: [
    {id: 1, message: 'Hi!'}, {id: 2, message: 'My name is Ivan'}, {id: 3, message: 'And you'},
    {id: 4, message: 'I am Fine'}, {id: 5, message: 'It s cool'}
  ],
  newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: { // добавление постов-сообщений Messages / альтернатива
      let body = state.newMessageBody;
      let stateCopy = {...state}; // поверхностное копирование
      stateCopy.messages = [...stateCopy.messages];  // глубокое копирование
      stateCopy.newMessageBody = '';
      stateCopy.messages.push({id: 6, message: body});
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: { // обновление ввода текста в посты-сообщения Messages / альтернатива
      let stateCopy = {...state}
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    default:
      return state;
  }
}

// наши actionCreator
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;