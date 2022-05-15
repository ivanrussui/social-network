// обернули в переменные action type из action creator
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hello world!', count: 10}, {id: 2, message: 'React it\'s cool', count: 15}
  ],
  newPostText: 'React SamuraiJS'
};

const profileReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ADD_POST: { // добавление постов Profile; ADD_POST это переменная action type из action creator
      let newPost = {
        id: 3,
        message: state.newPostText,
        count: 0
      };
      let stateCopy = {...state}; // поверхностное копирование
      stateCopy.posts = [...state.posts]; // глубокое копирование
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: { // обновление ввода текста в посты Profile
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

// наши actionCreator
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;