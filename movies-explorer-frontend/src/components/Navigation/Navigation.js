import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const setActive = ({ isActive }) =>
    isActive
      ? `navigation__list navigation__list_place_${props.place} link ${props.place}_active`
      : `navigation__list navigation__list_place_${props.place} link`;
  return (
    <nav className={`navigation navigation_place_${props.place}`}>
      {props.isOpenSideBar && (
        <NavLink to="/" className={setActive}>
          Главная
        </NavLink>
      )}
      <NavLink to="/movies" className={setActive}>
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className={setActive}>
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
