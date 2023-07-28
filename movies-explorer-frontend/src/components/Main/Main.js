import React from "react";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";

function Main(props) {
  function toogleHeader() {
    props.header(true);
  }
  function toogleFooter() {
    props.footer(true);
  }
  React.useEffect(() => {
      toogleHeader();
    toogleFooter();
  }, []);

  
  return(
    
    <main className="content">
      <Promo></Promo>
      <AboutProject ></AboutProject>
      <Techs ></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
  )
}

export default Main;