import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
// debugger;
  let state = props.store.getState();

  let addPost = () => {  // добавить пост
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {  // изменение текста поста
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText} />
  );
};

export default MyPostsContainer;
