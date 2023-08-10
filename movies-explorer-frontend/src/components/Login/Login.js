import React from "react";
import { useNavigate } from "react-router-dom";
import FormAuth from "../FormAuth/FormAuth";
import mainApi from "../../utils/MainApi.js";

function Login(props) {
  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({
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
  }, []);

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
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // props.setAnswerReg(false);
    // props.isOpenMessage(true);
    // .finally(() => props.isOpenMessage(true))
  };

  const title = "Рады видеть!";
  return (
    <FormAuth
      name="login"
      title={title}
      nameButton="Войти"
      message="Ещё не зарегистрированы?"
      nameButtonReplace="Регистрация"
      onSubmit={handleSubmit}
      onChange={handleChange}
    ></FormAuth>
  );
}

export default Login;
