// импортируем редьюсоры
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', count: 10}, {id: 2, message: 'React it\'s cool', count: 15}
            ],
            newPostText: 'React SamuraiJS'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ivan'}, {id: 2, name: 'Anna'}, {id: 3, name: 'Melissa'}, {id: 4, name: 'Kristina'},
                {id: 5, name: 'Vladimir'}, {id: 6, name: 'Alexandra'}
            ],
            messages: [
                {id: 1, message: 'Hi!'}, {id: 2, message: 'My name is Ivan'}, {id: 3, message: 'And you'},
                {id: 4, message: 'I am Fine'}, {id: 5, message: 'It s cool'}
            ],
            newMessageBody: ''
            // newPostMessage: 'Flux архитектура'
        },
        sidebar: {
            friends: [{id: 1, name: 'Kristina'}, {id: 2, name: 'Vladimir'}, {id: 3, name: 'Alexa'}]
        }
    },

    // наш "подписчик" ранее rerenderEntire()
    _callSubscriber() {
        console.log('State change');
    },

    // метод получение state
    getState() {
        // debugger;
        return this._state;
    },

    // функция наблюдатель с коллбэком будет связана с subscribe(rerenderEntire) в index.js паттерн observer
    subscribe(observer) {
        this._callSubscriber = observer; // происходит замыкание, вых из функ и идет выше, ввверху находит
    },

    dispatch(action) {
        // debugger;

        // связываем наш dispatch со своими редьюсерами
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state); // уведомляем подписчика
    }
};

window.store = store;

export default store;

