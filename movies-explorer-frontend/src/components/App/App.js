import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

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
  const [isEditProfile, setIsEditProfile] = React.useState(false); // открыт ли профиль в режиме редактирования
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(false); // открыт ли сайд бар
  const [isShowHeader, setIsShowHeader] = React.useState(true); // нужно ли показать шапку
  const [isShowFooter, setIsShowFooter] = React.useState(true); // нужно ли показать подвал

  function closeSideBar() {
    setIsOpenSideBar(false);
  }

  function toggleHeader(state) {
    setIsShowHeader(state);
  }

  function toggleFooter(state) {
    setIsShowFooter(state);
  }

  return (
    <div className="page">
      {isShowHeader && <Header loggedIn={loggedIn} />}
      <Routes>
        <Route
          path="/"
          element={<Main closeSideBar={closeSideBar} header={toggleHeader} footer={toggleFooter}/>}
        />
        <Route
          path="/:id"
          element={<Main closeSideBar={closeSideBar} header={toggleHeader} footer={toggleFooter}/>}
        />
        <Route
          path="/movies"
          element={
            <Movies
              answer={true}
              closeSideBar={closeSideBar}
              header={toggleHeader}
              footer={toggleFooter}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              answer={true}
              closeSideBar={closeSideBar}
              header={toggleHeader}
              footer={toggleFooter}
            />
          }
        />
        <Route path="/profile" element={<Profile header={toggleHeader} footer={toggleFooter}/>} />
        <Route path="/signin" element={<Login header={toggleHeader} footer={toggleFooter}/>} />
        <Route path="/signup" element={<Register header={toggleHeader} footer={toggleFooter}/>} />
        <Route path="*" element={<NotFoundPage header={toggleHeader} footer={toggleFooter}/>} />
      </Routes>
      {isShowFooter && <Footer></Footer>}
      {/* <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signup" element={<Register 
        //   isOpenPage={setPage} onLogin={handleLogin} setAnswerReg={setAnswerReg} isOpenMessage={setInfoTooltipPopupOpen} handleOpenInfo={openInfoUser}
          />} />
          <Route
            path="/signin"
            element={<Login 
                // isOpenPage={setPage} onLogin={handleLogin} setAnswerReg={setAnswerReg} isOpenMessage={setInfoTooltipPopupOpen} handleOpenInfo={openInfoUser} loginToHeader={setLogin}
                />}
          />
          <Route
            path="/profile"
            element={<Profile 
                editMode={isEditProfile}
                // isOpenPage={setPage} onLogin={handleLogin} setAnswerReg={setAnswerReg} isOpenMessage={setInfoTooltipPopupOpen} handleOpenInfo={openInfoUser} loginToHeader={setLogin}
                />}
          />
          {/* <Route
            path="/"
            element={
              <ProtectedRouteElement
                element={Main}
                cards={cards}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                isOpenPage={setPage}
                loggedIn={loggedIn}
              />
            }
          /> */}
      {/* <Route
            path="*"
            element={
              loggedIn ? (
                <Navigate to="/mesto" replace />
              ) : (
                <Navigate to="/sign-in" replace />
              )
            }
          /> 
        </Routes>
        </CurrentUserContext.Provider> */}
      {isOpenSideBar && <SideBar></SideBar>}
    </div>
  );
}

export default App;
