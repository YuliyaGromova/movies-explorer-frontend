import React from "react";
import { Link } from "react-router-dom";

function FormEditProfile(props) {
  return (
    <section className="profile">
      <form
        className="profile__form"
        name={props.name}
        onSubmit={props.onSubmit}
        noValidate
      >
        <h2 className="profile__title">Привет, {props.nameUser}!</h2>
        <label className="profile__label">
            Имя
            <input
              className="profile__item"
              type="name"
              placeholder="Имя"
              id="name"
              name="name"
              onChange={props.onChange}
              value={props.nameUser}
              required
            ></input>
          </label>
          <label className="profile__label">
          E-mail
          <input
            className="profile__item"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={props.onChange}
            value={props.userEmail}
            required
          ></input>
        </label>
        <button className="edit-button link">Редактировать</button>
        <Link to="/" className="exit-button link">Выйти из аккаунта</Link>
      </form>
    </section>
  );
}

export default FormEditProfile;
