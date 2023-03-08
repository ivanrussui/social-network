import React from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/Spinner/Spinner";
import plug from '../../../assets/img/plug.png';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWihtHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
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
        <div>
            <div className={s.descriptionBlock}>
                {/* мое решение */}
                {/*{photos ?*/}
                {/*    <img src={photos} alt="avatar"/> :*/}
                {/*    <img src={plug} alt="Заглушка"/>*/}
                {/*}*/}
                {/* решение похожее на Димыча */}
                <img src={photos || plug} alt={'avatar' || 'Заглушка'} className={s.descriptionImg}/>
                <div className={s.descriptionText}>
                    <div><b style={{color: 'indigo', textDecoration: 'underline', fontSize: '20px'}}>Обо мне</b> {profile.aboutMe}</div>
                    {/*Это я делал на 60-м уроке*/}
                    {/*{contacts.facebook || contacts.vk || contacts.instagram || contacts.github ?*/}
                    {/*    <div><b>Контакты:</b> <br/>*/}
                    {/*        <a href="facebook.com/">{profile.contacts.facebook}</a> <br/>*/}
                    {/*        <a href="vk.com/dimych">{profile.contacts.vk}</a> <br/>*/}
                    {/*        <a href="instagra.com/sds">{profile.contacts.instagram}</a> <br/>*/}
                    {/*        <a href="github.com/">{profile.contacts.github}</a> <br/>*/}
                    {/*    </div> :*/}
                    {/*    <p><b style={{color: 'red'}}>Контакты не указаны</b></p>*/}
                    {/*}*/}
                    <div>
                        <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}
                    </div>

                    <div className={s.status}><b>Статус работы: </b>
                        {profile.lookingForAJob ?
                            <img src="https://avatanplus.com/files/resources/original/5693e5540266115231b7d02a.png"
                                 alt="smile"/> :
                            // 2 смайла на выбор)
                            // <img src="http://cdn.onlinewebfonts.com/svg/img_437392.png" alt="smile sad"/>}
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sert_-_sad_smile.svg/640px-Sert_-_sad_smile.svg.png"
                                alt="smile sad"/>
                        }
                    </div>
                    <div><b>Поиск работы:</b> {profile.lookingForAJobDescription}</div>
                    <div><b>Полное имя:</b> {profile.fullName}</div>
                </div>

            </div>
            { isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.Contacts}> <b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
