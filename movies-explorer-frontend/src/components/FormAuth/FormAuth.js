import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function FormAuth(props) {
  return (
    <section className="auth" id={props.name}>
      <img className="auth__logo" src={logo} alt="логотип проекта"></img>
      <form
        className="auth__form"
        name={props.name}
        onSubmit={props.onSubmit}
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
              onChange={props.onChange}
              value={props.nameUser}
              required
            ></input>
            <span className="auth__error-message"></span>
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
            onChange={props.onChange}
            value={props.email}
            required
          ></input>
          <span className="auth__error-message"></span>
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
            onChange={props.onChange}
            value={props.password}
            required
          ></input>
          <span className="auth__error-message"></span>
        </label>
        <button className="auth__submit" type="submit" name="saveUser">
          {props.nameButton}
        </button>
        <div className="auth__switch-login">
          <p className="auth__sign-in">{props.message} &nbsp;</p>
          <Link to={props.name === "register"? "/signin": "/signup"} className="auth__link link"> {props.nameButtonReplace}</Link>
        </div>
      </form>
    </section>
  );
}

export default FormAuth;
