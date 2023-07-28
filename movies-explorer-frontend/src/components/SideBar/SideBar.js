import React from "react";
import Navigation from "../Navigation/Navigation";
import ButtonEditProfile from "../EditProfileButton/ButtonEditProfile";
import ButtonCloseSideBar from "../../images/close.svg";

function SideBar(props) {
  return (
    <section className="side-bar">
      <din className="side-bar__container">
        <img className="side-bar__exit" alt="крестик" src={ButtonCloseSideBar}></img>
        <Navigation isOpenSideBar={true} place="side-bar"></Navigation>
        <ButtonEditProfile place="side-bar"></ButtonEditProfile>
      </din>
    </section>
  );
}

export default SideBar;
