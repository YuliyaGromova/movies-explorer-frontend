import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const moviesList = props.movies.map((item) => (
    <MoviesCard
      key={item._id}
      movie={item}
      onCardLike={props.onCardLike}
      onCardDelete={props.onCardDelete}
      onlyOwn = {props.onlyOwn}
      
    ></MoviesCard>
  ));
  return (
    <section className="movies-card-list" aria-label="фильмотека">
      <ul className="movies-card-list__movies">{moviesList}</ul>
      <button className="movies-card-list__more-movies">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
