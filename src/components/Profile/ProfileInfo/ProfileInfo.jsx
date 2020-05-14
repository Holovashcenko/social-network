import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.contentLogo}>
        <img
          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
          alt="logo"
        />
      </div>
      <div className={s.description}>
        <div>
          <img
            height="100px"
            src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png"
            alt="avatar"
          />
        </div>
        <div>description</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
