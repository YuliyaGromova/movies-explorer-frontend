import { React, useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Message from "../Message/Message.js";
import { useResize } from "../../utils/resizeWindow.js";
import { NOTHING_FOUND } from "../../utils/message.js";
import filterMovies from "../../utils/filterMovies.js";
import {
  END_SLICE_ARR_SIZE_S,
  END_SLICE_ARR_SIZE_M,
  END_SLICE_ARR_SIZE_L,
  ADD_MOVIE_ARR_SIZE_S,
  ADD_MOVIE_ARR_SIZE_M,
  ADD_MOVIE_ARR_SIZE_L,
} from "../../utils/config.js";

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
        key={Math.floor(Math.random() * i * 1000)}
        movie={item}
        onClick={props.onClickLike}
        myCard={props.isLiked}
      ></MoviesCard>
    ));

  useEffect(() => {
    isScreenS && setEndSliceArray(END_SLICE_ARR_SIZE_S);
    isScreenM && setEndSliceArray(END_SLICE_ARR_SIZE_M);
    isScreenL && setEndSliceArray(END_SLICE_ARR_SIZE_L);
    //
  }, [isScreenL, isScreenM, isScreenS, props]);

  function renderMore() {
    isScreenS && setEndSliceArray(Number(endSliceArray) + ADD_MOVIE_ARR_SIZE_S);
    isScreenM && setEndSliceArray(Number(endSliceArray) + ADD_MOVIE_ARR_SIZE_M);
    isScreenL && setEndSliceArray(Number(endSliceArray) + ADD_MOVIE_ARR_SIZE_L);
  }

  useEffect(() => {
    setIsShowButtonMore(movies.length > endSliceArray);
    if (
      movies.length === 0 &&
      props.movies &&
      ((keyWord && !onlyOwn) || onlyOwn)
    ) {
      props.changeMessage(NOTHING_FOUND);
    }
  }, [movies, endSliceArray]);

  return moviesList && props.movies && (onlyOwn || (!onlyOwn && keyWord)) ? (
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
