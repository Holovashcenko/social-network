import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Prealoader/Prealoder";
import userPhoto from "../../../assets/images/gomer.png";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div className={s.contentLogo}>
        <img
          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
          alt="logo"
        />
      </div> */}
      <div className={s.description}>
        <div>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="photoUser" />
        </div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;
