import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    // console.log('profile')
    return (
        <>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            {/*<ProfileInfo profile={props.profile} /> /!*если статус через ProfileStatusContainer*!/*/}
            <MyPostsContainer/>
        </>
    );
};

export default Profile;
