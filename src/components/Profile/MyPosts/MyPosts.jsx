import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { FormControl, Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    // debugger
  return  (
      <form onSubmit={props.handleSubmit}>
          <div>
              {/*<Field name={'newPostText'} component={Textarea} typeField={'textarea'}*/}
              <Field name={'newPostText'} component={FormControl} typeField={'textarea'}
                     validate={[required, maxLength10]} placeholder={'Post message'}/>
          </div>
          <div>
              <button>SEND</button>
          </div>
      </form>
  )
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

const MyPosts = (props) => {
// debugger;
    let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} id={p.id} key={p.message}/>);
    let newPostElement = React.createRef();
    // let onAddPost = () => {  // добавить пост
    //     props.addPost();
    // };
    const onAddPost = (post) => {
        props.addPost(post.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onAddPost}/>
            {/*<div>*/}
                {/*<div>*/}
                {/*    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={onAddPost}>SEND</button>*/}
                {/*</div>*/}
            {/*</div>*/}
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
