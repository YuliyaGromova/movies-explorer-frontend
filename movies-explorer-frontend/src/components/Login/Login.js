import React from "react";
import FormAuth from "../FormAuth/FormAuth";
// import { Link } from 'react-router-dom';

function Login(props) {
   function toogleHeader() {
      props.header(false);
    }
    function toogleFooter() {
      props.footer(false);
    }
    React.useEffect(() => {
      toogleHeader();
      toogleFooter();
    }, []);
  // const title=`Привет, ${props.login}!`;
  const title = "Рады видеть!";
  return (
    <FormAuth
      name="login"
      title={title}
      nameButton="Войти"
      message="Ещё не зарегистрированы?"
      nameButtonReplace="Регистрация"
      //    linkToLogin={<div className="auth__switch-login"><p className="auth__sign-in">Ещё не зарегистрированы? &nbsp;</p>
      //   <button className="auth__link"> Регистрация</button></div>}
    ></FormAuth>
  );
}

export default Login;
