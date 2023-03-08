import React from 'react';
import s from './Post.module.css';
import post from '../../../../assets/img/post.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={post}
                alt="avatar"
            />
            {props.message}
            <div>
                <span>like {props.count} </span>
            </div>
        </div>
    );
};

export default Post;
