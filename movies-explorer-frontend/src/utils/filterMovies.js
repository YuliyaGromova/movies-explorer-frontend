import { DURATION_SHORT_MOVIE } from "./config.js";

function filterMovies(arr, onlyOwn, keyWord, stateFilter) {
  const moviesFilterWord = arr
    ? !keyWord
      ? onlyOwn
        ? arr
        : []
      : arr.filter(function (item) {
          return (
            item.nameRU.toLowerCase().includes(keyWord) ||
            item.nameEN.toLowerCase().includes(keyWord)
          );
        })
    : [];

  const movies = stateFilter
    ? moviesFilterWord.filter(function (item) {
        return item.duration <= DURATION_SHORT_MOVIE;
      })
    : moviesFilterWord;
  return movies;
}

export default filterMovies;
