import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import store from '../../../redux/state';


const MyPosts = (props) => {
  // debugger;
  // let postsElements = props.props.state.profilePage.posts.map(p => <Post message={p.message} count={p.count} key={p.id}/>);
  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} key={p.id}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
    props.dispatch({ type: 'ADD-POST' });
    // props.addPost();
  };

  let onPostChange = () => {
    // debugger;
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
    // props.updateNewPostText(text);
  }

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
