import React from "react";
import iconSearch from "../../images/iconSearch.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <img className="search-form__icon-search" src={iconSearch} alt="лупа" />
        <input className="search-form__input" placeholder="Фильм"></input>
        <button className="search-form__find button"></button>
        <FilterCheckbox
          nameFilter="Короткометражки"
          filter={props.filter}
        ></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
