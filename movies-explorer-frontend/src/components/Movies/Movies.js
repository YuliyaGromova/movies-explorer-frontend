import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movies from "../../utils/FindMoviesList";

function Movies(props) {
  function toggleStateFilter() {
    props.filter(false);
  }

  function toggleHeader() {
    props.header(true);
  }
  function toggleFooter() {
    props.footer(true);
  }
  React.useEffect(() => {
    toggleHeader();
    toggleFooter();
    toggleStateFilter();
  }, []);

  return (
    <main className="content">
      <SearchForm filter={props.filter}></SearchForm>
      {props.answer ? (
        <MoviesCardList
          movies={movies}
          onlyOwn={false}
          isLiked={props.isLiked}
          onClickButton={props.onClickButton}
          stateFilter={props.stateFilter}
          showButton={true}
        ></MoviesCardList>
      ) : (
        <Preloader></Preloader>
      )}
    </main>
  );
}

export default Movies;
