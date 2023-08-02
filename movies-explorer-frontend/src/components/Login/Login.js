import React from "react";
import FormAuth from "../FormAuth/FormAuth";

function Login(props) {
  function toggleHeader() {
    props.header(false);
  }
  function toggleFooter() {
    props.footer(false);
  }
  React.useEffect(() => {
    toggleHeader();
    toggleFooter();
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
