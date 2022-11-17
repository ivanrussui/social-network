import React from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/Spinner/Spinner";
import plug from '../../../assets/img/plug.png';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";
// import mainBg from '../../../assets/img/main-bg.jpg';

const ProfileInfo = (props) => {
    // debugger;
    if (!props.profile) { // если в props profile нет или null или undefined
        return <Spinner/> // отображаем спиннер
    }

    const photos = props.profile.photos.large;
    const contacts = props.profile.contacts;

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.image}*/}
            {/*         src={mainBg}*/}
            {/*         alt={"img"}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                {photos ?
                    <img src={photos} alt="avatar"/> :
                    <img src={plug} alt="Заглушка"/>
                }
                <div className={s.descriptionText}>
                    <div><b>О себе:</b> {props.profile.aboutMe}</div>
                    {contacts.facebook || contacts.vk || contacts.instagram || contacts.github ?
                        <div><b>Контакты:</b> <br/>
                            <a href="facebook.com">{props.profile.contacts.facebook}</a> <br/>
                            <a href="vk.com/dimych">{props.profile.contacts.vk}</a> <br/>
                            <a href="instagra.com/sds">{props.profile.contacts.instagram}</a> <br/>
                            <a href="github.com">{props.profile.contacts.github}</a> <br/>
                        </div> :
                        <p><b style={{color: 'red'}}>Контакты не указаны</b></p>
                    }

                    <div className={s.status}><b>Статус работы: </b>
                        {props.profile.lookingForAJob ?
                            <img src="https://avatanplus.com/files/resources/original/5693e5540266115231b7d02a.png"
                                 alt="smile"/> :
                            // 2 смайла на выбор)
                            // <img src="http://cdn.onlinewebfonts.com/svg/img_437392.png" alt="smile sad"/>}
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sert_-_sad_smile.svg/640px-Sert_-_sad_smile.svg.png"
                                alt="smile sad"/>
                        }
                    </div>
                    <div><b>Поиск работы:</b> {props.profile.lookingForAJobDescription}</div>
                    <div><b>Полное имя:</b> {props.profile.fullName}</div>
                </div>

            </div>

            {/* для моего изменения статуса коментил */}
            <ProfileStatus status={'Hey man! Whats app?'}/>

            {/*// для моего изменения статуса*/}
            {/*<ProfileStatusContainer/>*/}

        </div>
    );
};

export default ProfileInfo;
