import React from "react";
import FormAuth from "../FormAuth/FormAuth";
// import { Link } from "react-router-dom";

function Register(props) {
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

  const title = "Добро пожаловать!";
  return (
    <FormAuth
      name="register"
      title={title}
      nameButton="Зарегистрироваться"
      message="Уже зарегистрированы?"
      nameButtonReplace="Войти"
    ></FormAuth>
  );
}

export default Register;
