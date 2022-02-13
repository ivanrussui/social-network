import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    // debugger;

    let postsData = [
        {id: 1, message: 'Hello world!', count: 10},
        {id: 2, message: 'Hello friend!', count: 15}
    ]

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
                <Post message={postsData[0].message} count={postsData[0].count} />
                <Post message={postsData[1].message} count={postsData[1].count} />
            </div>
        </div>
    );
};

export default MyPosts;
