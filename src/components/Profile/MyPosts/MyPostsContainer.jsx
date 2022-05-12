import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return{
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;



// старый вариант через контенерную компоненту
// const MyPostsContainer = () => {
// // debugger;
//   return (
//       <StoreContext.Consumer>
//         { store => {
//
//           let state = store.getState();
//
//           let addPost = () => {  // добавить пост
//             store.dispatch(addPostActionCreator());
//           };
//
//           let onPostChange = (text) => {  // изменение текста поста
//             let action = updateNewPostTextActionCreator(text);
//             store.dispatch(action);
//           };
//
//           return <MyPosts updateNewPostText={onPostChange}
//                           addPost={addPost}
//                           posts={state.profilePage.posts}
//                           newPostText={state.profilePage.newPostText}/>;
//         }
//         }
//       </StoreContext.Consumer>
//   );
// };