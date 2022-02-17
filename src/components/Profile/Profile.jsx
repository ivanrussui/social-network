import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from './MyPosts/Post/Post';

const Profile = () => {
  // debugger;
  let posts = [
    {id: 1, message: 'Hello world!', count: 10},
    {id: 2, message: 'Hello friend!', count: 15}
  ]

  // let postsElements = posts.map(p => <Post message={p.message} count={p.count} />)
  let postsElements = posts.map(p => <MyPosts message={p.message} count={p.count} />)

  // console.log(posts[1].message)
    return (
        <div>
            {/*<ProfileInfo {...postsElements}/>*/}
            <ProfileInfo />
          {postsElements}
          {/*<MyPosts message={posts.message} count={posts.count}/>*/}
        </div>
    );
};

export default Profile;
