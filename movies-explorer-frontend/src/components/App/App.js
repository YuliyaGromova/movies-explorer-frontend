import { React, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { Routes, Route } from "react-router-dom";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.js";
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
import Tooltip from "../Tooltip/Tooltip.js";
import mainApi from "../../utils/MainApi.js";
import {
  PROFILE_EDIT_SUCCES,
  SERVER_ERROR,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  DELETE_SUCCESS,
  DELETE_FAIL,
  ENTER_LINK,
  ENTER_SUCCESS,
  LOGIN_SERVER_ERROR,
} from "../../utils/message.js";

function App() {
  const defaultLoggedIn = localStorage.getItem("token") ? true : false;
  const [loggedIn, setLoggedIn] = useState(defaultLoggedIn); // а залогинин ли пользователь
  const [isOpenSideBar, setIsOpenSideBar] = useState(false); // открыт ли сайд бар
  const [isShowHeader, setIsShowHeader] = useState(false); // нужно ли показать шапку
  const [isShowFooter, setIsShowFooter] = useState(false); // нужно ли показать подвал
  const [currentUser, setCurrentUser] = useState({}); // пользователь ( имя и почта)
  const [ownMovies, setOwnMovies] = useState([]); // массив сохраненных фильмов
  const [answer, setAnswer] = useState(true); // ожидание ответа от сервера (тру- ответа не ждем, фалсе - ждем ответа)
  const [stateForm, setStateForm] = useState(""); // состояние формы (просмотр, редактирование, ошибка)
  const [messageToUser, setMessageToUser] = useState("");
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [requestLike, setRequestLike] = useState(true); // true - не ждем ответа

  function LogOf() {
    setLoggedIn(false);
    localStorage.clear();
  }

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([
        //в Promise.all передаем массив промисов которые нужно выполнить
        mainApi.getUserInfo(),
        mainApi.getMovies(),
      ])
        .then(([dataUserInfo, dataOwnMovies]) => {
          setCurrentUser(dataUserInfo);
          setOwnMovies(dataOwnMovies);
          if (messageToUser !== ENTER_SUCCESS) {
            setMessageToUser(ENTER_LINK);
            openTooltip();
          }
        })
        .catch((err) => {
          //попадаем сюда если один из промисов завершаться ошибкой
          console.log(err);
          err === 401
            ? setMessageToUser(LOGIN_SERVER_ERROR)
            : setMessageToUser(SERVER_ERROR);
          openTooltip();
          LogOf();
        });
    }
  }, [loggedIn]);

  const checkToken = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token) {
        mainApi
          .getContent()
          .then((res) => {
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((err) => {
            //попадаем сюда если один из промисов завершаться ошибкой
            console.log(err);
            err === 401
              ? setMessageToUser(LOGIN_SERVER_ERROR)
              : setMessageToUser(SERVER_ERROR);
            openTooltip();
            LogOf();
          });
      }
    }
  };
  // изменяем состояние "залогинен ли"
  function handleLogin(loggedIn) {
    setLoggedIn(loggedIn);
  }

  function openTooltip() {
    setIsOpenTooltip(true);
    setTimeout(() => {
      setIsOpenTooltip(false);
    }, 2000);
  }

  // сайд бар открыт
  function openSideBar() {
    setIsOpenSideBar(true);
  }

  // сайд бар закрыт
  function closeSideBar() {
    setIsOpenSideBar(false);
  }

  // показываем ли шапку на странице
  function toggleHeader(state) {
    setIsShowHeader(state);
  }

  // показываем ли футер на странице
  function toggleFooter(state) {
    setIsShowFooter(state);
  }

  // профиль - следующий этап
  function handleUpdateUser(data) {
    setAnswer(false);
    mainApi
      .editUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setMessageToUser(PROFILE_EDIT_SUCCES);
        openTooltip();
      })
      .catch((err) => {
        console.log(err);
        setStateForm("error");
        err === 401
          ? setMessageToUser(LOGIN_SERVER_ERROR)
          : setMessageToUser(SERVER_ERROR);
        openTooltip();
        LogOf();
      })
      .finally(() => setAnswer(true));
  }

  // проверяем есть ли фильм в сохраненных (если есть то красим сердечко)
  function isMovieLike(movie) {
    const isLiked = ownMovies.some((i) => i.movieId === movie.id);
    return isLiked;
  }

  // при клике на сердечко красим сердечко и снимаем окраску (и удаляем из сохраненных), если страница с найденными
  // при клике удаляем из избранных, если страница с сохраненными

  function handleMovieLike(movie) {
    const isLiked = isMovieLike(movie);
    const savedMovie =
      ownMovies.find((item) => item.movieId === movie.id) || {};
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      setRequestLike(false);
      mainApi
        .addNewMovie(movie)
        .then((newMovie) => {
          setOwnMovies([newMovie, ...ownMovies]);
          setMessageToUser(ADD_MOVIE_SUCCESS);
          openTooltip();
        })
        .catch((err) => {
          console.log(err);
          if (err === 401) {
            setMessageToUser(LOGIN_SERVER_ERROR);
            openTooltip();
            LogOf();
          } else {
            setMessageToUser(ADD_MOVIE_FAIL);
          openTooltip();
          }
        })
        .finally(()=> setRequestLike(true))
    } else {
      handleMovieDelete(savedMovie);
    }
  }

  function handleMovieDelete(movie) {
    setRequestLike(false);
    mainApi
      .deleteMoviesApi(movie._id)
      .then(() => {
        setOwnMovies((state) => state.filter((m) => m._id !== movie._id));
        setMessageToUser(DELETE_SUCCESS);
        openTooltip();
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) {
          setMessageToUser(LOGIN_SERVER_ERROR);
          openTooltip();
          LogOf();
        } else {
          setMessageToUser(DELETE_FAIL);
          openTooltip();
        }
      })
      .finally(()=> setRequestLike(true));
  }

  return (
    <div className="page">
      {isShowHeader && (
        <Header
          loggedIn={loggedIn}
          openSideBar={openSideBar}
          changeStateForm={setStateForm}
        />
      )}
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={<Main header={toggleHeader} footer={toggleFooter} />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                answer={answer} // предполагается что пришел ответ от сервера, иначе запускает бублик (пока ждем ответа)
                setAnswer={setAnswer}
                closeSideBar={closeSideBar}
                header={toggleHeader}
                footer={toggleFooter}
                isLiked={isMovieLike}
                setMessageToUser={setMessageToUser}
                openTooltip={openTooltip}
                onClickButtonLike={handleMovieLike}
                loggedIn={loggedIn}
                requestLike={requestLike}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                answer={answer} // ждем ответа от сервера при получении сохраненных фильмов (тру-ответ пришел)
                closeSideBar={closeSideBar}
                header={toggleHeader}
                footer={toggleFooter}
                isLiked={isMovieLike}
                onClickButton={handleMovieDelete}
                setAnswer={setAnswer}
                onClickButtonLike={handleMovieDelete}
                movies={ownMovies}
                loggedIn={loggedIn}
                setMessageToUser={setMessageToUser}
                openTooltip={openTooltip}
                requestLike={requestLike}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                header={toggleHeader}
                footer={toggleFooter}
                onUpdateUser={handleUpdateUser}
                logOf={LogOf}
                loggedIn={loggedIn}
                stateForm={stateForm}
                changeStateForm={setStateForm}
                answer={answer}
                setMessageToUser={setMessageToUser}
                openTooltip={openTooltip}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                header={toggleHeader}
                footer={toggleFooter}
                onLogin={handleLogin}
                stateForm={stateForm}
                changeStateForm={setStateForm}
                setMessageToUser={setMessageToUser}
                openTooltip={openTooltip}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                header={toggleHeader}
                footer={toggleFooter}
                onLogin={handleLogin}
                stateForm={stateForm}
                changeStateForm={setStateForm}
                openTooltip={openTooltip}
                setMessageToUser={setMessageToUser}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFoundPage header={toggleHeader} footer={toggleFooter} />
            }
          />
        </Routes>
      </CurrentUserContext.Provider>

      {isShowFooter && <Footer></Footer>}
      {isOpenSideBar && <SideBar closeSideBar={closeSideBar}></SideBar>}
      {isOpenTooltip && (
        <Tooltip
          closeTooltip={setIsOpenTooltip}
          message={messageToUser}
        ></Tooltip>
      )}
    </div>
  );
}

export default App;
