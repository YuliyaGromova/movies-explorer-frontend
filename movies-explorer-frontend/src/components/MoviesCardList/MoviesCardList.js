import { React, useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Message from "../Message/Message.js";
import { useResize } from "../../utils/resizeWindow.js";
import { NOTHING_FOUND } from "../../utils/message.js";
import filterMovies from "../../utils/filterMovies.js";

function MoviesCardList(props) {
  const { isScreenS, isScreenM, isScreenL } = useResize();
  const onlyOwn = props.onlyOwn;

  const [endSliceArray, setEndSliceArray] = useState(0);

  const keyWord = props.keyWord ? props.keyWord.toLowerCase() : "";

  const movies = filterMovies(
    props.movies,
    onlyOwn,
    keyWord,
    props.stateFilter
  );

  const sliceMovies = !onlyOwn ? movies.slice(0, endSliceArray) : movies;

  const [isShowButtonMore, setIsShowButtonMore] = useState(
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

  useEffect(() => {
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

  useEffect(() => {
    setIsShowButtonMore(movies.length > endSliceArray);
    if (movies.length === 0 && props.movies) {
      props.changeMessage(NOTHING_FOUND);
    }
  }, [movies, endSliceArray]);

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
