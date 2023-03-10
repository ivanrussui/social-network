import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    // console.log('profile')
    return (
        <>
            <ProfileInfo savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;
