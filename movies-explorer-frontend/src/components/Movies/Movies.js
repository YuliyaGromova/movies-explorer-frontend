import { React, useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { FIRST_MESSAGE, ERROR_SEARCH } from "../../utils/message";
import moviesApi from "../../utils/MoviesApi.js";

function Movies(props) {
  const [isOnlyShortFilm, setIsOnlyShortFilm] = useState(false); // сотсояние чекбокса фильтрующих короткометражки
  const [message, setMessage] = useState("");
  const [keyWordSearch, setKeyWordSearch] = useState(
    localStorage.getItem("keyWord")
  );

  const localMovies = JSON.parse(localStorage.getItem("allFindMovies"));

  function setFoundMovies() {
    props.setAnswer(false);
    moviesApi
      .getMovies()
      .then((res) => {
        localStorage.setItem("allFindMovies", JSON.stringify(res));
      })
      .catch(() => setMessage(ERROR_SEARCH))
      .finally(() => {
        props.setAnswer(true);
      });
  }

  useEffect(() => {
    toggleHeader();
    toggleFooter();

    const word = localStorage.getItem("keyWord");
    const short = JSON.parse(localStorage.getItem("short"));
    const movies = JSON.parse(localStorage.getItem("allFindMovies"));
    if (movies == null) {
      setMessage(FIRST_MESSAGE);
      setIsOnlyShortFilm(false);
      localStorage.removeItem("keyWord");
      localStorage.removeItem("short");
      setKeyWordSearch(null);
    } else {
      if (word == null) {
        setKeyWordSearch(null);
      }
      if (short == null) {
        setIsOnlyShortFilm(false);
      } else {
        setIsOnlyShortFilm(short);
      }
    }
  }, []); // эффект срабатывает только один раз - при самом первом рендеринге

  useEffect(() => {}, [keyWordSearch, isOnlyShortFilm]);

  function toggleHeader() {
    props.header(true);
  }
  function toggleFooter() {
    props.footer(true);
  }

  return (
    <main className="content">
      <SearchForm
        onlyOwn={false}
        getKeyWord={setKeyWordSearch}
        filterShort={setIsOnlyShortFilm}
        keyWord={keyWordSearch}
        changeMessage={setMessage}
        stateFilter={isOnlyShortFilm}
        getAllMovies={setFoundMovies} // запрос на получение массива извне
      ></SearchForm>
      {props.answer ? (
        <MoviesCardList
          onlyOwn={false}
          isLiked={props.isLiked}
          onClickButton={props.onClickButton}
          stateFilter={isOnlyShortFilm}
          showButton={true}
          movies={localMovies}
          keyWord={keyWordSearch}
          changeMessage={setMessage}
          message={message}
          onClickLike={props.onClickButtonLike}
        ></MoviesCardList>
      ) : (
        <Preloader></Preloader>
      )}
    </main>
  );
}

export default Movies;
