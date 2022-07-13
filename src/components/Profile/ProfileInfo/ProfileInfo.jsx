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
        <img src={props.profile.photos.large} alt="avatar" />
        <span> {props.profile.lookingForAJobDescription} </span>
      </div>

    </div>
  );
};

export default ProfileInfo;
