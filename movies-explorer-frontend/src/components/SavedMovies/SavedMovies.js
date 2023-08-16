import { React, useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { NOTHING_SAVED } from "../../utils/message";

function SavedMovies(props) {
  const [isOnlyShortFilm, setIsOnlyShortFilm] = useState(false);
  const [keyWordSearch, setKeyWordSearch] = useState("");
  const [message, setMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]); // изменяем массив при удалении и добавлении новых карточек по умолчанию массив который сформировался при авторизации

  useEffect(() => {
    toggleHeader();
    toggleFooter();
    setSavedMovies(props.movies);
    if (!props.movies.length) {
      setMessage(NOTHING_SAVED);
    }
  }, [props.movies]);

  function toggleHeader() {
    props.header(true);
  }
  function toggleFooter() {
    props.footer(true);
  }

  return (
    <main className="content">
      <SearchForm
        getKeyWord={setKeyWordSearch}
        filterShort={setIsOnlyShortFilm}
        keyWord={keyWordSearch}
        changeMessage={setMessage}
        stateFilter={isOnlyShortFilm}
        onlyOwn={true}
      ></SearchForm>
      {props.answer ? (
        <MoviesCardList
          onlyOwn={true}
          onClickLike={props.onClickButtonLike}
          isLiked={props.isLiked}
          onClickButton={props.onClickButton}
          stateFilter={isOnlyShortFilm}
          showButton={false}
          movies={savedMovies}
          keyWord={keyWordSearch}
          changeMessage={setMessage}
          message={message}
        ></MoviesCardList>
      ) : (
        <Preloader></Preloader>
      )}
    </main>
  );
}

export default SavedMovies;
