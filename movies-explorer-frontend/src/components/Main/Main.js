import React from "react";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";

function Main(props) {
  function toggleHeader() {
    props.header(true);
  }
  function toggleFooter() {
    props.footer(true);
  }
  React.useEffect(() => {
    toggleHeader();
    toggleFooter();
  }, []);

  return (
    <main className="content">
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
  );
}

export default Main;
