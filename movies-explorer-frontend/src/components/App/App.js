import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Routes, Route } from "react-router-dom";
import myMovie from "../../utils/MoviesList";

import NotFoundPage from "../NotFound/NotFoundPage.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import SideBar from "../SideBar/SideBar.js";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true); // а залогинин ли пользователь
  // const [isEditProfile, setIsEditProfile] = React.useState(false); // открыт ли профиль в режиме редактирования
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(false); // открыт ли сайд бар
  const [isShowHeader, setIsShowHeader] = React.useState(true); // нужно ли показать шапку
  const [isShowFooter, setIsShowFooter] = React.useState(true); // нужно ли показать подвал
  // const [currentUser, setCurrentUser] = React.useState({}); // пользователь ( имя и почта)
  const [ownMovies, setOwnMovies] = React.useState(myMovie); // массив сохраненных фильмов
  // const [allFindMovies, setAllFindMovies] = React.useState([]); //массив фильмов найденных по поиску
  const [isOnlyShortFilm, setIsOnlyShortFilm] = React.useState(false); // сотсояние чекбокса фильтрующих короткометражки

  // React.useEffect(() => {
  //   Promise.all([
  //     //в Promise.all передаем массив промисов которые нужно выполнить
  //     // api не сделано
  //     // api.getUserInfo(),
  //     // api.getInitialMovies(),
  //   ])
  //     .then(([dataUserInfo, dataOwnMovies]) => {
  //       setCurrentUser(dataUserInfo);
  //       setOwnMovies(dataOwnMovies);
  //     })
  //     .catch((err) => {
  //       //попадаем сюда если один из промисов завершаться ошибкой
  //       console.log(err);
  //     });
  // }, []);

  function openSideBar() {
    setIsOpenSideBar(true);
  }

  function closeSideBar() {
    setIsOpenSideBar(false);
  }

  function toggleHeader(state) {
    setIsShowHeader(state);
  }

  function toggleFooter(state) {
    setIsShowFooter(state);
  }


  // профиль - следующий этап
  function handleUpdateUser(data) {
    // api.editUserInfo(data)
    // .then((res) => {
    //   setCurrentUser(res);
    //
    // })
    // .catch((err) => {
    //   console.log(err);
    // }
    // )
  }

  // проверяем есть ли фильм в сохраненных (если есть то красим сердечко)
  function isMovieLike(movie) {
    const isLiked = ownMovies.find(function (item) {
      return item.movieID === movie._id;
    });
    return isLiked;
  }

  // при клике на сердечко красим сердечко и снимаем окраску (и удаляем из сохраненных), если страница с найденными
  // при клике удаляем из избранных, если страница с сохраненными
  function handleMovieLike(movie) {
    // следующий этап
  }

  function handleMovieDelete(movie) {
    // примерно так - следующий этап
    // api.deleteCardApi(movie._id)
    // .then(()=>{
    //   setOwnMovies((state) => state.filter((m) => m._id !== movie._id))
    // })
    // .catch((err) => {
    //   console.log(err);
    // }
    // )
  }
  // доработать в следующем этапе
  function LogOf() {
    setLoggedIn(false);
  }

  return (
    <div className="page">
      {isShowHeader && <Header loggedIn={loggedIn} openSideBar={openSideBar} />}
      <Routes>
        <Route
          path="/"
          element={<Main header={toggleHeader} footer={toggleFooter} />}
        />
        <Route
          path="/movies"
          element={
            <Movies
              answer={true} // предполагается что пришел ответ от сервера, иначе запускает бублик (пока ждем ответа)
              closeSideBar={closeSideBar}
              header={toggleHeader}
              footer={toggleFooter}
              isLiked={isMovieLike}
              onClickButton={handleMovieLike}
              filter={setIsOnlyShortFilm}
              stateFilter={isOnlyShortFilm}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              answer={true} // ждем ответа от сервера при получении сохраненных фильмов (тру-ответ пришел)
              closeSideBar={closeSideBar}
              header={toggleHeader}
              footer={toggleFooter}
              isLiked={isMovieLike}
              onClickButton={handleMovieDelete}
              filter={setIsOnlyShortFilm}
              stateFilter={isOnlyShortFilm}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              header={toggleHeader}
              footer={toggleFooter}
              onUpdateUser={handleUpdateUser}
              logOf={LogOf}
            />
          }
        />
        <Route
          path="/signin"
          element={<Login header={toggleHeader} footer={toggleFooter} />}
        />
        <Route
          path="/signup"
          element={<Register header={toggleHeader} footer={toggleFooter} />}
        />
        <Route
          path="*"
          element={<NotFoundPage header={toggleHeader} footer={toggleFooter} />}
        />
      </Routes>
      {isShowFooter && <Footer></Footer>}
      {isOpenSideBar && <SideBar closeSideBar={closeSideBar}></SideBar>}
    </div>
  );
}

export default App;
