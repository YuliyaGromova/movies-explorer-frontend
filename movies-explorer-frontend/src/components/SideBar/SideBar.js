import React from "react";
import Navigation from "../Navigation/Navigation";
import ButtonEditProfile from "../EditProfileButton/ButtonEditProfile";

function SideBar(props) {
  return (
    <section className="side-bar">
      <div className="side-bar__container">
        <button
          className="side-bar__exit button"
          onClick={props.closeSideBar}
        ></button>
        <Navigation isOpenSideBar={true} place="side-bar"></Navigation>
        <ButtonEditProfile place="side-bar"></ButtonEditProfile>
      </div>
    </section>
  );
}

export default SideBar;
