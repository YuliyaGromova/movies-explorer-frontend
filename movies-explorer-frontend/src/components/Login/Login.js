import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import FormAuth from "../FormAuth/FormAuth";
import mainApi from "../../utils/MainApi.js";
import { LOGIN_ERROR, ENTER_SUCCESS } from "../../utils/message";

function Login(props) {
  const navigate = useNavigate();

  const [isRequest, setIsRequest] = useState(false);

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

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
    setIsRequest(true);
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
      })
      .finally(() => {
        setIsRequest(false);
      });
  };

  const title = "Рады видеть!";

  function toggleHeader() {
    props.header(false);
  }
  function toggleFooter() {
    props.footer(false);
  }
  useEffect(() => {
    toggleHeader();
    toggleFooter();
    props.changeStateForm("edit");
  }, []);

  return !props.loggedIn ? (
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
      request={isRequest}
    ></FormAuth>
  ) : (
    <Navigate to="/movies" replace />
  );
}

export default Login;
