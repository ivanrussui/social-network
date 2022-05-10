import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props) => {
// debugger;

  return (
    <StoreContext.Consumer> {
      (store) => {
        let state = props.store.getState();
        // todo возможно это решит проблему let state = store.getState();

        let addPost = () => {  // добавить пост
          props.store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {  // изменение текста поста
          let action = updateNewPostTextActionCreator(text);
          props.store.dispatch(action);
        };

        return <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>;
      }
    }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
