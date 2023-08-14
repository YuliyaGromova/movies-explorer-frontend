import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {
  FIRST_MESSAGE,
  NOTHING_FOUND,
  ERROR_SEARCH,
} from "../../utils/message";
import moviesApi from "../../utils/MoviesApi.js";

function Movies(props) {
  const [isOnlyShortFilm, setIsOnlyShortFilm] = React.useState(false); // сотсояние чекбокса фильтрующих короткометражки
  const [message, setMessage] = React.useState("");
  const [keyWordSearch, setKeyWordSearch] = React.useState(localStorage.getItem("keyWord"));
  
  const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem("allFindMovies"))); //фильмы полученные в результате запроса и внешнего сервера (не фильтрованные)
  // const [allMovies, setAllMovies] = React.useState(null); //фильмы полученные в результате запроса и внешнего сервера (не фильтрованные)
  // const localMovie = JSON.parse(localStorage.getItem("allFindMovies"));
  function setFoundMovies() {
    props.setAnswer(false);
    moviesApi
      .getMovies()
      .then((res) => {
        // localStorage.setItem("allFindMovies", JSON.stringify(res));
        setAllMovies(res);
      })
      .catch(() => setMessage(ERROR_SEARCH))
      .finally(() => {
        props.setAnswer(true);
      });
  }

  React.useEffect(() => {
    toggleHeader();
    toggleFooter();

    const word = localStorage.getItem("keyWord");
    const short = JSON.parse(localStorage.getItem("short"));
    const movies = JSON.parse(localStorage.getItem("allFindMovies"));
    if (movies == null) {
      setMessage(FIRST_MESSAGE);
      // setKeyWordSearch(null);
      setIsOnlyShortFilm(false);
      localStorage.removeItem("keyWord");
      localStorage.removeItem("short");
      setKeyWordSearch(null);
      // setFoundMovies();
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
  React.useEffect(() => {
  }, [keyWordSearch, isOnlyShortFilm]);

  function toggleHeader() {
    props.header(true);
  }
  function toggleFooter() {
    props.footer(true);

  }

  // console.log(`width: ${width}px, isScreenS: ${String(isScreenS)}, isScreenM: ${String(isScreenM)}, isScreenL: ${String(isScreenL)}`);

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
      {(props.answer) ? (
        <MoviesCardList
          onlyOwn={false}
          isLiked={props.isLiked}
          onClickButton={props.onClickButton}
          stateFilter={isOnlyShortFilm}
          showButton={true}
          movies={allMovies}
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
