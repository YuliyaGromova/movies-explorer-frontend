import React from "react";

function NavTab() {
  return (
    <nav className="promo__nav">
      <ul className="promo__nav-menu">
        <li className="promo__menu-list">
          <a className="promo__button button" href="#project">
            О проекте
          </a>
        </li>
        <li className="promo__menu-list">
          <a className="promo__button button" href="#techs">
            Технологии
          </a>
        </li>
        <li className="promo__menu-list">
          <a className="promo__button button" href="#me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
