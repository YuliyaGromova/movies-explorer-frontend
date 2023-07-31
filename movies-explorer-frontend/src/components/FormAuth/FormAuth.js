import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function FormAuth(props) {
  const [isMessageError, setMessageError] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValidForm, setIsValidForm] = React.useState(false);

  function handleChange(e) {
    const message = e.target.validationMessage;
    const key = e.target.name;
    setMessageError({ ...isMessageError, [key]: message });
  }
  function checkValidity(e) {
    const valid = e.target.form.checkValidity();
    setIsValidForm(valid);
  }

  return (
    <section className="auth" id={props.name}>
      <img className="auth__logo" src={logo} alt="логотип проекта"></img>
      <form
        className="auth__form"
        name={props.name}
        onSubmit={props.onSubmit}
        onChange={checkValidity}
        noValidate
      >
        <h2 className="auth__title">{props.title}</h2>
        {props.name === "register" && (
          <label className="auth__label">
            Имя
            <input
              className="auth__item"
              type="name"
              placeholder="Имя"
              id="name"
              name="name"
              value={props.nameUser}
              onChange={handleChange}
              required
            ></input>
            <span className="auth__error-message">{isMessageError.name}</span>
          </label>
        )}
        <label className="auth__label">
          E-mail
          <input
            className="auth__item"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={handleChange}
            value={props.email}
            required
          ></input>
          <span className="auth__error-message">{isMessageError.email}</span>
        </label>
        <label className="auth__label">
          Пароль
          <input
            className="auth__item"
            type="password"
            placeholder="Пароль"
            id="password"
            name="password"
            autoComplete="on"
            onChange={handleChange}
            value={props.password}
            required
          ></input>
          <span className="auth__error-message">{isMessageError.password}</span>
        </label>
        <button
          className={
            isValidForm
              ? "auth__submit button"
              : "auth__submit button button_disabled"
          }
          type="submit"
          name="saveUser"
          disabled={!isValidForm}
        >
          {props.nameButton}
        </button>
        <div className="auth__switch-login">
          <p className="auth__sign-in">{props.message} &nbsp;</p>
          <Link
            to={props.name === "register" ? "/signin" : "/signup"}
            className="auth__link like"
          >
            {" "}
            {props.nameButtonReplace}
          </Link>
        </div>
      </form>
    </section>
  );
}

export default FormAuth;
