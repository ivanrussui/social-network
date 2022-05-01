// обернули в переменные action type из action creator
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST: // добавление постов Profile; ADD_POST это переменная action type из action creator
      let newPost = {
        id: 3,
        message: state.newPostText,
        count: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT: // обновление ввода текста в посты Profile
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

// наши actionCreator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;