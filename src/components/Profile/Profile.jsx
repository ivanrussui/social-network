import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;
