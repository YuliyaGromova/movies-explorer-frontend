import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Message from "../Message/Message.js";
import { useResize } from "../../utils/resizeWindow.js";
import { NOTHING_FOUND } from "../../utils/message.js";

function MoviesCardList(props) {
  const { isScreenS, isScreenM, isScreenL } = useResize();
  const onlyOwn = props.onlyOwn;

  const [endSliceArray, setEndSliceArray] = React.useState(0);

  const keyWord = props.keyWord ? props.keyWord.toLowerCase() : "";

  // При фильтрации по тексту запроса нужно проверять, есть ли введенные слова в названиях фильма на русском и английском — поля nameRU и nameEN. При этом на поиск не должен влиять регистр символов.
  const moviesFilterWord = props.movies
    ? !keyWord
      ? onlyOwn
        ? props.movies
        : []
      : props.movies.filter(function (item) {
          return (
            item.nameRU.toLowerCase().includes(keyWord) ||
            item.nameEN.toLowerCase().includes(keyWord)
          );
        })
    : [];

  // фильтр по короткометражкам
  const movies = props.stateFilter
    ? moviesFilterWord.filter(function (item) {
        return item.duration < 40;
      })
    : moviesFilterWord;

  const sliceMovies = !onlyOwn ? movies.slice(0, endSliceArray) : movies;

  const [isShowButtonMore, setIsShowButtonMore] = React.useState(
    sliceMovies.length > endSliceArray
  );

  const moviesList =
    sliceMovies.length &&
    sliceMovies.map((item, i) => (
      <MoviesCard
        onlyOwn={onlyOwn}
        key={i}
        movie={item}
        onClick={props.onClickLike}
        myCard={props.isLiked}
      ></MoviesCard>
    ));

  React.useEffect(() => {
    isScreenS && setEndSliceArray(5);
    isScreenM && setEndSliceArray(8);
    isScreenL && setEndSliceArray(16);
    //
  }, [isScreenL, isScreenM, isScreenS]);

  function renderMore() {
    isScreenS && setEndSliceArray(Number(endSliceArray) + 2);
    isScreenM && setEndSliceArray(Number(endSliceArray) + 2);
    isScreenL && setEndSliceArray(Number(endSliceArray) + 4);
  }

  React.useEffect(() => {
    setIsShowButtonMore(movies.length > endSliceArray);
    if (movies.length === 0 && props.movies) {props.changeMessage(NOTHING_FOUND)}
  }, [movies, endSliceArray]);

  React.useEffect(() => {
    if (!onlyOwn && props.movies) {
      localStorage.setItem("allFindMovies", JSON.stringify(moviesFilterWord));
    }
  },[moviesFilterWord, props.movies])

  return moviesList && props.movies ? (
    <section className="movies-card-list" aria-label="фильмотека">
      <ul className="movies-card-list__movies">{moviesList}</ul>
      <button
        onClick={renderMore}
        className={
          isShowButtonMore && !onlyOwn
            ? "movies-card-list__more-movies button"
            : "movies-card-list__more-movies movies-card-list__more-movies_disabled"
        }
      >
        Ещё
      </button>
    </section>
  ) : (
    <Message message={props.message}></Message>
  );
}

export default MoviesCardList;
