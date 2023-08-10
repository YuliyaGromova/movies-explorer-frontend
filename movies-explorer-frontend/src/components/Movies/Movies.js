import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { FIRST_MESSAGE, NOTHING_FOUND, ERROR_SEARCH } from "../../utils/message";
import moviesApi from "../../utils/MoviesApi.js";


function Movies(props) {

  const [isOnlyShortFilm, setIsOnlyShortFilm] = React.useState(false); // сотсояние чекбокса фильтрующих короткометражки
  const [message, setMessage] = React.useState("");
  const [keyWordSearch, setKeyWordSearch] = React.useState(localStorage.getItem("keyWord"));
  const [allFoundMovies, setAllFoundMovies] = React.useState([]);

  function setFoundMovies () {
    props.setAnswer(false);
    moviesApi
      .getMovies()
      .then((res) => {
        localStorage.setItem("allFindMovies", JSON.stringify(res));
        setAllFoundMovies(JSON.parse(localStorage.getItem("allFindMovies")));
      })
      .catch(() => setMessage(ERROR_SEARCH))
      .finally(() => {props.setAnswer(true)});
  };

  React.useEffect(() => {
    toggleHeader();
    toggleFooter();

    const word = localStorage.getItem("keyWord");
    const short = JSON.parse(localStorage.getItem("short"));
    const movies = JSON.parse(localStorage.getItem("allFindMovies"));
    if (!word) {
      setKeyWordSearch(null);
    }
    if (short == null) {
      setIsOnlyShortFilm(false);
    } else {
      setIsOnlyShortFilm(short);
    }
    if (movies == null) {
      setMessage(FIRST_MESSAGE);
      // setFoundMovies();
    } 
    
  }, []); // эффект срабатывает только один раз - при самом первом рендеринге
  React.useEffect(() => {
    setAllFoundMovies(JSON.parse(localStorage.getItem("allFindMovies")));
  }, [keyWordSearch, isOnlyShortFilm]);

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
        getMovies={setAllFoundMovies}
        getAllMovies={setFoundMovies}
      ></SearchForm>
      {
        props.answer ?
          <MoviesCardList
            onlyOwn={false}
            isLiked={props.isLiked}
            onClickButton={props.onClickButton}
            stateFilter={isOnlyShortFilm}
            showButton={true}
            movies={allFoundMovies}
            keyWord={keyWordSearch}
            changeMessage={setMessage}
            message={message || NOTHING_FOUND}
            onClickLike={props.onClickButtonLike}
          ></MoviesCardList>:
          <Preloader></Preloader>
      }
    </main>
  );
}

export default Movies;
