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
    
  const title = "Рады видеть!";
  return (
    <FormAuth
      name="login"
      title={title}
      nameButton="Войти"
      message="Ещё не зарегистрированы?"
      nameButtonReplace="Регистрация"
    ></FormAuth>
  );
}

export default Login;
