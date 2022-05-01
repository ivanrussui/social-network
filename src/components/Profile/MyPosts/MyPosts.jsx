import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';


const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} key={p.id}/>);

  let newPostElement = React.createRef();

  let addPost = () => {  // добавить пост
    // debugger;
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {  // изменение текста поста
    // debugger;
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>SEND</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
