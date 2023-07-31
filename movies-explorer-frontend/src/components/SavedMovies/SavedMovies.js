import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movies from "../../utils/MoviesList";

function SavedMovies(props) {
  function toogleHeader() {
    props.header(true);
  }
  function toogleFooter() {
    props.footer(true);
  }
  React.useEffect(() => {
    toogleHeader();
    toogleFooter();
  }, []);

  return (
    <main className="content">
      <SearchForm filter={props.filter}></SearchForm>
      {props.answer ? (
        <MoviesCardList
          movies={movies}
          onlyOwn={true}
          isLiked={props.isLiked}
          onClickButton={props.onClickButton}
          stateFilter={props.stateFilter}
          showButton={false}
        ></MoviesCardList>
      ) : (
        <Preloader></Preloader>
      )}
    </main>
  );
}

export default SavedMovies;
