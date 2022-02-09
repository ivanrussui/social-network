import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	// debugger;
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>SEND</button>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        <Post message='Hello world!' count="10" />
        <Post message='Hello friend' count="15" />
      </div>
    </div>
  );
};

export default MyPosts;
