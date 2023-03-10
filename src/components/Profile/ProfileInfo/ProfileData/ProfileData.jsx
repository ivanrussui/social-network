import s from '../ProfileInfo.module.css';
import { Contact } from './Contact/Contact';

export const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.descriptionText}>
            { isOwner && <button onClick={goToEditMode}>Редактировать</button>}
            <div>
                <b style={{color: 'indigo', textDecoration: 'underline', fontSize: '20px'}}>Обо мне</b>
                {profile.aboutMe}
            </div>
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
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
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
    );
};
