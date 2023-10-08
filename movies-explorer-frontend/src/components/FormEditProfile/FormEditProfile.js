import { React, useRef, useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function FormEditProfile(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const currentUser = useContext(CurrentUserContext);

  const [isMessageError, setMessageError] = useState({
    name: "",
    email: "",
  });
  const [isValidForm, setIsValidForm] = useState(false); // при открытии окна редактирования профиля данные в полях равны тем что сохранены

  const handleChangeStateEdit = () => {
    props.changeState("edit");
  };

  function handleChangeName(e) {
    handleChangeStateEdit();
    props.setName(e.target.value);
    const message =
      e.target.validationMessage === "Введите данные в указанном формате."
        ? "Имя может содержать только латиницу, кириллицу, пробел или дефис"
        : e.target.validationMessage;
    setMessageError({ ...isMessageError, name: message });
  }

  function handleChangeEmail(e) {
    handleChangeStateEdit();
    props.setEmail(e.target.value);
    const message =
      e.target.validationMessage === "Введите данные в указанном формате."
        ? "email должен содержать локальная часть, символ '@', точка и доменное имя. "
        : e.target.validationMessage;
    setMessageError({ ...isMessageError, email: message });
  }

  const resetForm = useCallback(
    (newIsValid = false) => {
      const state =
        newIsValid.target.form.checkValidity() &&
        (currentUser.name !== nameRef.current.value ||
          currentUser.email !== emailRef.current.value);
      setIsValidForm(state);
    },
    [setIsValidForm, currentUser]
  );

  return (
    <section className="profile">
      <form
        className="profile__form"
        name={props.name}
        onSubmit={props.onSubmit}
        onChange={resetForm}
        noValidate
      >
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <label className="profile__label">
          Имя
          <input
            ref={nameRef}
            className="profile__item"
            type="name"
            placeholder="Имя"
            id="name"
            name="name"
            onChange={handleChangeName}
            value={props.userName}
            disabled={props.stateForm === "read" || !props.answer}
            pattern="^[А-яЁёA-z\-\s]+"
            minLength="2"
            maxLength="30"
            required
          ></input>
          <span className="profile__error-message">{(props.stateForm === "edit")? isMessageError.name: ""}</span>
        </label>
        <label className="profile__label">
          E&#8209;mail
          <input
            ref={emailRef}
            className="profile__item"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={handleChangeEmail}
            value={props.userEmail}
            disabled={props.stateForm === "read" || !props.answer}
            pattern="^[^ ]+@[^ ]+\.[a-z]{2,4}$"
            required
          ></input>
          <span className="profile__error-message">{(props.stateForm === "edit")? isMessageError.email: ""}</span>
        </label>
        {props.stateForm === "read" && (
          <button
            className="profile__edit-button link"
            onClick={handleChangeStateEdit}
          >
            Редактировать
          </button>
        )}
        {props.stateForm === "read" && (
          <Link
            to="/"
            className="profile__exit-button link"
            onClick={props.logOf}
          >
            Выйти из аккаунта
          </Link>
        )}
        {/* не забыть функцию выхода */}
        {props.stateForm === "edit" && (
          <button
            className={
              isValidForm && props.answer
                ? "profile__submit-button button"
                : "profile__submit-button button button_disabled"
            }
            type="submit"
            onSubmit={props.onSubmit}
            disabled={!isValidForm}
          >
            {props.answer ? "Сохранить" : "Сохранение..."}
          </button>
        )}
        {props.stateForm === "error" && (
          <span className="error-message">
            При обновлении профиля произошла ошибка.
          </span>
        )}
        {props.stateForm === "error" && (
          <button
            className="profile__submit-button profile__submit-button_error button button_disabled"
            type="submit"
            disabled={true}
          >
            Сохранить
          </button>
        )}
      </form>
    </section>
  );
}

export default FormEditProfile;
