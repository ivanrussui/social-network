import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    // debugger;

    let posts = [
        {id: 1, message: 'Hello world!', count: 10},
        {id: 2, message: 'Hello friend!', count: 15}
    ]

    let postsElements = posts.map(p => <Post message={p.message} count={p.count} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>SEND</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
