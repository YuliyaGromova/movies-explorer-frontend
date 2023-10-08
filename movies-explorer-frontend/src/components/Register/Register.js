import { React, useState, useEffect } from "react";
import FormAuth from "../FormAuth/FormAuth";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import mainApi from "../../utils/MainApi.js";
import getErrorMessage from "../../utils/error.js";
import { ENTER_SUCCESS } from "../../utils/message.js";

function Register(props) {
  const navigate = useNavigate();

  const [errorMessage, setMessageError] = useState("");
  const [isRequest, setIsRequest] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email } = formValue;
    setIsRequest(true);
    mainApi
      .register(name, password, email)
      .then(() => {
        mainApi
          .authorize(password, email)
          .then((data) => {
            if (data.token) {
              props.onLogin(true);
              localStorage.setItem("token", data.token);
              setFormValue({ email: "", password: "" });
              navigate("/movies", { replace: true });
              props.setMessageToUser(ENTER_SUCCESS);
              props.openTooltip(true);
            }
          })
          .catch((err) => {
            console.log(err);
            props.changeStateForm("error");
            setMessageError(getErrorMessage(err));
          });
      })
      .catch((err) => {
        console.log(err);
        props.changeStateForm("error");
        setMessageError(getErrorMessage(err));
      })
      .finally(() => {
        setIsRequest(false);
      });
  };

  const title = "Добро пожаловать!";
  return !props.loggedIn ? (
    <FormAuth
      name="register"
      title={title}
      nameButton="Зарегистрироваться"
      message="Уже зарегистрированы?"
      nameButtonReplace="Войти"
      onSubmit={handleSubmit}
      onChange={handleChange}
      stateForm={props.stateForm}
      changeState={props.changeStateForm}
      error={errorMessage}
      request={isRequest}
    ></FormAuth>
  ) : (
    <Navigate to="/movies" replace />
  );
}

export default Register;
