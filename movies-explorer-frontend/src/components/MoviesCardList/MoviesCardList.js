import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Message from "../Message/Message.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCardList(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const onlyOwn = props.onlyOwn;
  const showButton = props.showButton; // костыль до этапа 3
  const keyWord = props.keyWord ? props.keyWord.toLowerCase() : "";
  
  // При фильтрации по тексту запроса нужно проверять, есть ли введенные слова в названиях фильма на русском и английском — поля nameRU и nameEN. При этом на поиск не должен влиять регистр символов.
  const moviesFilterWord =
    (props.movies)? (!keyWord)? (onlyOwn)? props.movies: [] : props.movies.filter(function (item) {
            return (
              item.nameRU.toLowerCase().includes(keyWord) ||
              item.nameEN.toLowerCase().includes(keyWord)
            );
          }) :[];
  // фильтр по короткометражкам

  const movies = props.stateFilter
    ? moviesFilterWord.filter(function (item) {
        return item.duration < 40;
      })
    : moviesFilterWord;

  const moviesList =
    movies.length &&
    movies.map((item, i) => (
      <MoviesCard
        onlyOwn={onlyOwn}
        key={i++}
        movie={item}
        onClick={props.onClickLike}
        myCard={props.isLiked}
      ></MoviesCard>
    ));

  return (
    moviesList ? <section className="movies-card-list" aria-label="фильмотека">
      <ul className="movies-card-list__movies">{moviesList}</ul>
      <button
        className={
          showButton
            ? "movies-card-list__more-movies button"
            : "movies-card-list__more-movies movies-card-list__more-movies_disabled"
        }
      >
        Ещё
      </button>
    </section>
   :
    <Message message={props.message}></Message>
  );
}

export default MoviesCardList;
