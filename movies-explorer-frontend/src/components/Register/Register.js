import React from "react";
import FormAuth from "../FormAuth/FormAuth";
import { useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi.js";

function Register(props) {
  const navigate = useNavigate();

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email } = formValue;
    mainApi.register(name, password, email).then(() => {
      mainApi
        .authorize(password, email)
        .then((data) => {
          if (data.token) {
            props.onLogin(true);
            localStorage.setItem("token", data.token);
            setFormValue({ email: "", password: "" });
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
          // props.setAnswerReg(false);
          // props.isOpenMessage(true);
        });
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
    ></FormAuth>
  );
}

export default Register;
