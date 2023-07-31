import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const showButton = false; // костыль до этапа 3

  const movies = props.stateFilter
    ? props.movies.filter(function (item) {
        return item.duration < 53;
      })
    : props.movies;

  const moviesList = movies.map((item) => (
    <MoviesCard
      onlyOwn={props.onlyOwn}
      key={item._id}
      movie={item}
      onClick={props.onClickButton}
      myCard={props.isLiked}
      stateFilter={props.stateFilter}
    ></MoviesCard>
  ));

  return (
    <section className="movies-card-list" aria-label="фильмотека">
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
  );
}

export default MoviesCardList;
