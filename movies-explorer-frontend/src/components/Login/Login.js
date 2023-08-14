import React from "react";
import { useNavigate } from "react-router-dom";
import FormAuth from "../FormAuth/FormAuth";
import mainApi from "../../utils/MainApi.js";
// import getErrorMessage from "../../utils/error.js"
import { LOGIN_ERROR, ENTER_SUCCESS  } from "../../utils/message";

function Login(props) {
  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = React.useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formValue;
    if (!formValue.email || !formValue.password) {
      return;
    }
    mainApi
      .authorize(password, email)
      .then((data) => {
        if (data.token) {
          props.onLogin(true);
          localStorage.setItem("token", data.token);
          setFormValue({ name: "", email: "", password: "" });
          navigate("/movies", { replace: true });
          props.setMessageToUser(ENTER_SUCCESS);
          props.openTooltip(true);
        }
      })
      .catch((err) => {
        console.log(err);
        props.changeStateForm("error");
        setErrorMessage(LOGIN_ERROR);
      });
  };


  const title = "Рады видеть!";

  function toggleHeader() {
    props.header(false);
  }
  function toggleFooter() {
    props.footer(false);
  }
  React.useEffect(() => {
    toggleHeader();
    toggleFooter();
    props.changeStateForm("edit");
  }, []);

  return (
    <FormAuth
      name="login"
      title={title}
      nameButton="Войти"
      message="Ещё не зарегистрированы?"
      nameButtonReplace="Регистрация"
      onSubmit={handleSubmit}
      onChange={handleChange}
      setFormValue={setFormValue}
      stateForm={props.stateForm}
      changeState={props.changeStateForm}
      error={errorMessage}
    ></FormAuth>
  );
}

export default Login;
