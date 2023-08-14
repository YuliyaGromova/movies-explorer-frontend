import React from "react";


function MoviesCard(props) {
  const movie = props.movie;
  const onlyOwn = props.onlyOwn; //для страницы сохраненных фильмов
  
  const duration = convertMinInHour();
  const image = (onlyOwn)? movie.image: `https://api.nomoreparties.co` + movie.image.url;

  function convertMinInHour() {
    const hours = Math.floor(movie.duration / 60);
    const min = movie.duration % 60;
    return hours + "ч " + min + "м";
  }

  const isLiked = props.myCard(movie);
  function saveMovie() {
    props.onClick(movie);
  }

  return (
    <li className="movies-card">
      <a href={movie.trailerLink} target="_blank" className="link" rel="noreferrer">
        <div 
        className="movies-card__poster"
        style={{ backgroundImage: `url(${image})` }}
        ></div>
      </a>
      <div className="movies-card__info">
        <p className="movies-card__name">{movie.nameRU}</p>
        <button
          className={
            onlyOwn
              ? "movies-card__like movies-card__like_state_delete button"
              : isLiked
              ? "movies-card__like movies-card__like_state_like button"
              : "movies-card__like movies-card__like_state_dislike button"
          }
          onClick={saveMovie}
        ></button>
      </div>
      <p className="movies-card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
