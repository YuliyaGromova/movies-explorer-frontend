import React from "react";

function MoviesCard(props) {
  const movie = props.movie;
  const onlyOwn = props.onlyOwn;
  return (
    <li className="movies-card">
      <div
        className="movies-card__poster"
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>
      <div className="movies-card__info">
        <p className="movies-card__name">{movie.nameRu}</p>
        <div
          className={
            onlyOwn
              ? "movies-card__like movies-card__like_state_delete"
              : "movies-card__like"
          }
        ></div>
      </div>
      <p className="movies-card__duration">{movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
