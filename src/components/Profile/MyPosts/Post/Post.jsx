import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
        alt="avatar"
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
