import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import movies from "../../utils/MoviesList";
import { NOTHING_SAVED, NOTHING_FOUND } from "../../utils/message";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isOnlyShortFilm, setIsOnlyShortFilm] = React.useState(false);
  const [keyWordSearch, setKeyWordSearch] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [savedMovies, setSavedMovies] = React.useState([]); // изменяем массив при удалении и добавлении новых карточек по умолчанию массив который сформировался при авторизации

  React.useEffect(() => {
    toggleHeader();
    toggleFooter();
    setSavedMovies(props.movies)
    if (!props.movies.length) {
      setMessage(NOTHING_SAVED)
    }
  },[props.movies])

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
        // getMovies={setAllFoundMovies}
        ></SearchForm>
      {props.answer ? (
        <MoviesCardList
          // movies={props.movies}
          onlyOwn={true}
          // isLiked={props.isLiked}
          // onClickButton={props.onClickButton}
          onClickLike={props.onClickButtonLike}
            isLiked={props.isLiked}
            onClickButton={props.onClickButton}
            stateFilter={isOnlyShortFilm}
            showButton={false}
            movies={savedMovies}
            keyWord={keyWordSearch}
            changeMessage={setMessage}
            message={message || NOTHING_FOUND}
        ></MoviesCardList>
      ) : (
        <Preloader></Preloader>
      )}
    </main>
  );
}

export default SavedMovies;
