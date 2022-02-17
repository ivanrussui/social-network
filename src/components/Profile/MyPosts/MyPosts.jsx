import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    // debugger;

  // let postsElements1 = props.map(p => <Post message={p.message} count={p.count} />)

  // let postsElements = props.map(p => {
  //   message={p.message} count={p.count})
  // }

  // console.log(props.message)

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
              <Post message={props.message} count={props.count} />
              {/*  {postsElements1}*/}
            </div>
        </div>
    );
};

export default MyPosts;
