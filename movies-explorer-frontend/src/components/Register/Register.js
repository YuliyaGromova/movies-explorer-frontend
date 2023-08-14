import React from "react";
import FormAuth from "../FormAuth/FormAuth";
import { useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi.js";
import getErrorMessage from "../../utils/error.js";
import { ENTER_SUCCESS } from "../../utils/message.js";

function Register(props) {
  const navigate = useNavigate();

  const [errorMessage, setMessageError] = React.useState("");

  const [formValue, setFormValue] = React.useState({
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
  React.useEffect(() => {
    toggleHeader();
    toggleFooter();
    props.changeStateForm("edit");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email } = formValue;
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
      });
    // .finally(() => props.isOpenMessage(true))
  };

  const title = "Добро пожаловать!";
  return (
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
    ></FormAuth>
  );
}

export default Register;
