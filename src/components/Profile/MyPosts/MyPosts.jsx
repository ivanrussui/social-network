import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { FormControl } from '../../common/FormsControls/FormsControls';

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

const MyPosts = React.memo(props => {
    // console.log('RENDER');
// debugger;
    let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} count={p.count} id={p.id}
                                                   key={p.message}/>);

    const onAddPost = (post) => {
        props.addPost(post.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3 style={{color: 'indigo'}}>My posts</h3>
            <PostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;
