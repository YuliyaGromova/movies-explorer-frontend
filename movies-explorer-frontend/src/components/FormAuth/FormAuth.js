import React, { useCallback } from "react";
import { Link } from "react-router-dom";

function FormAuth(props) {
  const [isMessageError, setMessageError] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValidForm, setIsValidForm] = React.useState(false);

  function handleChange(e) {
    props.onChange(e);
    props.changeState("edit");
    const key = e.target.name;
    const message =
      e.target.validationMessage === "Введите данные в указанном формате." &&
      key === "name"
        ? "Имя может содержать только латиницу, кириллицу, пробел или дефис"
        : e.target.validationMessage;
    setMessageError({ ...isMessageError, [key]: message });
  }

  const resetForm = useCallback(
    (newIsValid = false) => {
      setIsValidForm(newIsValid.target.form.checkValidity());
    },
    [setIsValidForm]
  );

  return (
    <section className="auth" id={props.name}>
      <Link to="/" className="auth__logo"></Link>
      <form
        className="auth__form"
        name={props.name}
        onSubmit={props.onSubmit}
        onChange={resetForm}
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
              pattern="^[А-яЁёA-z\-\s]+"
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
        {props.stateForm === "edit" && (
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
        )}
        {props.stateForm === "error" && (
          <span className="error-message">
            {props.error}. Измените данные и попробуйте ещё раз.
          </span>
        )}
        {props.stateForm === "error" && (
          <button
            className="auth__submit button button_disabled"
            type="submit"
            disabled={true}
          >
            {props.nameButton}
          </button>
        )}
        <div className="auth__switch-login">
          <p className="auth__sign-in">{props.message} &nbsp;</p>
          <Link
            to={props.name === "register" ? "/signin" : "/signup"}
            className="auth__link link"
          >
            {props.nameButtonReplace}
          </Link>
        </div>
      </form>
    </section>
  );
}

export default FormAuth;
