import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/Spinner/Spinner";
import plug from '../../../assets/img/plug.png';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWihtHooks";
import { ProfileDataForm } from './ProfileData/ProfileDataForm';
import { ProfileData } from './ProfileData/ProfileData';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) { // если в props profile нет или null или undefined
        return <Spinner/> // отображаем спиннер
    }
    const photos = profile.photos.large;
    // const contacts = profile.contacts;


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.descriptionBlock}>
            <div className={s.left}>
                {/* мое решение */}
                {/*{photos ?*/}
                {/*    <img src={photos} alt="avatar"/> :*/}
                {/*    <img src={plug} alt="Заглушка"/>*/}
                {/*}*/}
                {/* решение похожее на Димыча */}
                <img src={photos || plug} alt={'avatar' || 'Заглушка'} className={s.descriptionImg}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            </div>
            <div>
                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />
                }
            </div>

        </div>
    );
};

export default ProfileInfo;
