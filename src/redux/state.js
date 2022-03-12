import {rerenderEntire} from '../render';

let state = {
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
  }, sidebar: {
    friends: [{id: 1, name: 'Kristina'}, {id: 2, name: 'Vladimir'}, {id: 3, name: 'Alexa'}]
  }
};

// window.state = state;
//
// let obg = {
//   e: 5,
//   t: 'lk' = {
//     d: 'd'
//   }
// }

// функция добавления постов Profile
export let addPost = () => {
  // debugger;
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    count: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntire(state);
};

// функция обновления ввода текста в посты Profile
export let updateNewPostText = (newText) => {
  // debugger;
  state.profilePage.newPostText = newText;
  rerenderEntire(state);
};


// функция добавления постов-сообщений Messages
export let addMessage = () => {
  // debugger;
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newPostMessage
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newPostMessage = '';
  rerenderEntire(state);
};

// функция обновления ввода текста в посты-сообщения Messages
export let updateNewMessageText = (newText) => {
  // debugger;
  state.dialogsPage.newPostMessage = newText;
  rerenderEntire(state);
};

export default state;