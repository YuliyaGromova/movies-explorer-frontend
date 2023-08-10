import React from "react";
import iconSearch from "../../images/iconSearch.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { NOT_KEY_WORD } from "../../utils/message.js";
// import moviesApi from "../../utils/MoviesApi.js";

function SearchForm(props) {
  const keyWord = props.keyWord ? props.keyWord : "";
  const [newWord, setNewWord] = React.useState(keyWord);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.onlyOwn) {
      if (!localStorage.getItem("allFindMovies")) {
        props.getAllMovies();
      }
      if (newWord) {
        localStorage.setItem("short", JSON.stringify(props.stateFilter));
        localStorage.setItem("keyWord", newWord);
        props.changeMessage("");
      } else {
        props.changeMessage(NOT_KEY_WORD);
      }
      props.getKeyWord(newWord);
    } else {
        props.changeMessage("");
        props.getKeyWord(newWord); 
    }
  };

  const handleChange = (event) => setNewWord(event.target.value);

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <img className="search-form__icon-search" src={iconSearch} alt="лупа" />
        <input
          className="search-form__input"
          placeholder="Фильм"
          value={newWord}
          onChange={handleChange}
        ></input>
        <button className="search-form__find button" type="submit"></button>
        <FilterCheckbox
          onlyOwn={props.onlyOwn}
          nameFilter="Короткометражки"
          filterShort={props.filterShort}
        ></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
