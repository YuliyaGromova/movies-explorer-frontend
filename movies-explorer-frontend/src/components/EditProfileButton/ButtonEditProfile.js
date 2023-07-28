import React from "react";
import profilePic from "../../images/iconProfile.svg";
import { Link } from "react-router-dom";

function ButtonEditProfile(props) {
  return (
    <Link to="/profile" className={`profile-button profile-button_place_${props.place} link`}>
        <p className="profile-button__label-button">Аккаунт</p>
        <img
          className="profile-button__icon-profile"
          src={profilePic}
          alt="иконка редактирования профиля"
        />
    </Link>
  );
}

export default ButtonEditProfile;
