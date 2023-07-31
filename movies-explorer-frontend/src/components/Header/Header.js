import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

import Navigation from "../Navigation/Navigation.js";
import ButtonEditProfile from "../EditProfileButton/ButtonEditProfile.js";

function Header(props) {
  // const navigate = useNavigate();
  return (
    <header className="header">
      <Link to="/"> <img className="header__logo" alt="логотип проекта" src={logo} /></Link>
      {props.loggedIn && <Navigation place="header"></Navigation>}
      {props.loggedIn ? (
        <div className="header__buttons">
          <ButtonEditProfile place="header"></ButtonEditProfile>
          <button className="header__burger"></button>
        </div>
      ) : (
        <div className="header__auth">
          <Link to="/signup" className="header__reg-button link">Регистрация</Link>
          <Link to="/signin" className="header__enter-button button">Войти</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
