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

  // метод получение state
  getState() {
    // debugger;
    return this._state;
  },

  _callSubscriber() {
    console.log('State change');
  },

  // функция добавления постов Profile
  addPost() {
    // debugger;
    // console.log(store.addPost)
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      count: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  // функция обновления ввода текста в посты Profile
  updateNewPostText(newText) {
    // debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  // функция добавления постов-сообщений Messages
  addMessage() {
    // debugger;
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newPostMessage
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newPostMessage = '';
    this._callSubscriber(this._state);
  },

  // функция обновления ввода текста в посты-сообщения Messages
  updateNewMessageText(newText) {
    // debugger;
    this._state.dialogsPage.newPostMessage = newText;
    this._callSubscriber(this._state);
  },

  // функция наблюдатель с коллбэком будет связана с subscribe(rerenderEntire) в index.js паттерн observer
  subscribe(observer) {
    this._callSubscriber = observer; // происходит замыкание, вых из функ и идет выше, ввверху находит
  }
}


export default store;



window.store = store;
// window.state = state;

// export default state;