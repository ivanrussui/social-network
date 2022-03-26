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
        {id: 1, message: 'Hi!'}, {id: 2, message: 'My name is Ivan'}, {id: 3, message: 'And you'}, {id: 4, message: 'I am Fine'}, {id: 5, message: 'It s cool'}
      ],
      newPostMessage: 'Flux архитектура'
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

  dispatch(action) { // { type: 'ADD-POST' }
    // debugger;
    if (action.type === 'ADD-POST') { // добавление постов Profile
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        count: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') { // обновление ввода текста в посты Profile
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === 'ADD-MESSAGE') { // добавление постов-сообщений Messages
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newPostMessage
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newPostMessage = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') { // обновление ввода текста в посты-сообщения Messages
        this._state.dialogsPage.newPostMessage = action.newText;
        this._callSubscriber(this._state);
    }
  }
}


export default store;
window.store = store;

// функция добавления постов Profile
// addPost() {
//   let newPost = {
//     id: 3,
//     message: this._state.profilePage.newPostText,
//     count: 0
//   };
//
//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = '';
//   this._callSubscriber(this._state);
// },

// функция обновления ввода текста в посты Profile
// updateNewPostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },

// функция добавления постов-сообщений Messages
// addMessage() {
//   let newMessage = {
//     id: 6,
//     message: this._state.dialogsPage.newPostMessage
//   };
//
//   this._state.dialogsPage.messages.push(newMessage);
//   this._state.dialogsPage.newPostMessage = '';
//   this._callSubscriber(this._state);
// },

// функция обновления ввода текста в посты-сообщения Messages
// updateNewMessageText(newText) {
//   this._state.dialogsPage.newPostMessage = newText;
//   this._callSubscriber(this._state);
// }
