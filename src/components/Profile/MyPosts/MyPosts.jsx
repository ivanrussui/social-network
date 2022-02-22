import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  // debugger
  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} key={p.id}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
