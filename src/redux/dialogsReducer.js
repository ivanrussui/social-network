// обернули в переменные action.type из actionCreator
const SEND_MESSAGE = 'SEND-MESSAGE';
const CANCEL_MESSAGE = 'CANCEL-MESSAGE';
const ADD_DIALOG = 'ADD-DIALOG';
const DELETE_DIALOG = 'DELETE-DIALOG';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'}, {id: 2, name: 'Anna'}, {id: 3, name: 'Melissa'}, {id: 4, name: 'Kristina'},
        {id: 5, name: 'Vladimir'}, {id: 6, name: 'Alexandra'}
    ],
    messages: [
        {id: 1, message: 'Hi!'}, {id: 2, message: 'My name is Ivan'}, {id: 3, message: 'And you'},
        {id: 4, message: 'I am Fine'}, {id: 5, message: 'It s cool'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:  { // добавление постов-сообщений Messages
            let body = action.newMessageBody;
            return {
                ...state,           // поверхностное копирование
                messages: [...state.messages, {id: 6, message: body}]  // глубокое копирование, {вместо push сразу пишем}
            };
        }
        case CANCEL_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.id)
            };
        }
        case  ADD_DIALOG: {
            let body = action.newNameBody;
            return {
                ...state,
                dialogs: [...state.dialogs, {id: 7, name: body}]
            }
        }
        case DELETE_DIALOG: {
            return {
                ...state,
                dialogs: state.dialogs.filter(d => d.id !== action.id)
            }
        }
        default:
            return state;
    }
}

// наши actionCreator
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const cancelMessageCreator = (id) => ({type: CANCEL_MESSAGE, id});
export const addDialogCreator = (newNameBody) => ({type: ADD_DIALOG, newNameBody});
export const deleteDialogCreator = (id) => ({type: DELETE_DIALOG, id});

export default dialogsReducer;