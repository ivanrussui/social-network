import React from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/Spinner/Spinner";

const ProfileInfo = (props) => {
  // debugger;
  if (!props.profile) { // если в props profile нет или null или undefined
    return <Spinner/> // отображаем спиннер
  }

  return (
    <div>
      <div>
        <img className={s.image}
             src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
             alt="img"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="avatar"/>
        <div className={s.descriptionText}>
          <div><b>О себе:</b> {props.profile.aboutMe}</div>
          <div><b>Контакты:</b> <br/>
              <a href="facebook.com">{props.profile.contacts.facebook}</a> <br/>
              {/*<a href="#">{props.profile.contacts.website}</a> <br/>*/}
              <a href="vk.com/dimych">{props.profile.contacts.vk}</a> <br/>
              <a href="instagra.com/sds">{props.profile.contacts.instagram}</a> <br/>
              {/*<a href="#">{props.profile.contacts.youtube}</a> <br/>*/}
              <a href="github.com">{props.profile.contacts.github}</a> <br/>
              {/*<a href="#">{props.profile.contacts.mainLink}</a> <br/>*/}
          </div>

          <div className={s.status}><b>Статус работы: </b>
            {props.profile.lookingForAJob ?
              <img src="https://avatanplus.com/files/resources/original/5693e5540266115231b7d02a.png" alt="smile"/> :
              // 2 смайла на выбор)
              // <img src="http://cdn.onlinewebfonts.com/svg/img_437392.png" alt="smile sad"/>}
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sert_-_sad_smile.svg/640px-Sert_-_sad_smile.svg.png" alt="smile sad"/>}
          </div>
          <div><b>Поиск работы:</b> {props.profile.lookingForAJobDescription}</div>
          <div><b>Полное имя:</b> {props.profile.fullName}</div>
        </div>

      </div>

    </div>
  );
};

export default ProfileInfo;
