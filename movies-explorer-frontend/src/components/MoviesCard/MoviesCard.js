import React from "react";

function MoviesCard(props) {
  const movie = props.movie;
  const onlyOwn = props.onlyOwn; //для страницы сохраненных фильмов

  const duration = convertMinInHour();

  function convertMinInHour() {
    const hours = Math.floor(movie.duration / 60);
    const min = movie.duration % 60;
    return hours + "ч " + min + "м";
  }
  
  const isLiked = props.myCard(movie);
  return (
    <li className="movies-card">
      <div
        className="movies-card__poster link"
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>
      <div className="movies-card__info">
        <p className="movies-card__name">{movie.nameRu}</p>
        <button
          className={
            onlyOwn
              ? "movies-card__like movies-card__like_state_delete button"
              : isLiked
              ? "movies-card__like movies-card__like_state_like button"
              : "movies-card__like movies-card__like_state_dislike button"
          }
          onClick={props.onClick}
        ></button>
      </div>
      <p className="movies-card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
