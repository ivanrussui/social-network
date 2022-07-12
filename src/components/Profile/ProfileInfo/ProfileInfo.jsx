import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.image}
             src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
             alt="img"
        />
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
      </div>

    </div>
  );
};

export default ProfileInfo;
