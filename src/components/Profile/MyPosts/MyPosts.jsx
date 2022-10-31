import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
// debugger;
    let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} id={p.id} key={p.message}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {  // добавить пост
        props.addPost();
    };

    let onPostChange = () => {  // изменение текста поста
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>SEND</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
