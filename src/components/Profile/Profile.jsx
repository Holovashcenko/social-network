import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => (
  <div className={s.content}>
    <div className={s.contentLogo}>
      <img
        src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
        alt="logo"
      />
    </div>
    <div>
      <div>
        <img
          height="100px"
          src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png"
          alt="avatar"
        />
      </div>
      <div>description</div>
    </div>
    <MyPosts />
  </div>
);

export default Profile;
