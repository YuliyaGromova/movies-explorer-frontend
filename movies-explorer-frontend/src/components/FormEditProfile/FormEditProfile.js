import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function FormEditProfile(props) {
  const nameRef=React.useRef();
  const emailRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);
  

  const [isMessageError, setMessageError] = React.useState({
    name: "",
    email: "",
  });
  const [isValidForm, setIsValidForm] = React.useState(false); // при открытии окна редактирования профиля данные в полях равны тем что сохранены

  const handleChangeStateEdit = () => {
    props.changeState("edit");
  }

console.log(props.stateForm);

  function handleChangeName(e) {
    handleChangeStateEdit();
    props.setName(e.target.value);
    setMessageError({ ...isMessageError, name: e.target.validationMessage });
  }

  function handleChangeEmail(e) {
    handleChangeStateEdit();
    props.setEmail(e.target.value);
    setMessageError({ ...isMessageError, email: e.target.validationMessage });
  }

  const resetForm = React.useCallback(
    (newIsValid = false) => {
    const state = newIsValid.target.form.checkValidity() && (currentUser.name !== nameRef.current.value || currentUser.email !== emailRef.current.value);
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
            disabled={props.stateForm === "read"}
            required
          ></input>
          <span className="profile__error-message">{isMessageError.name}</span>
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
            disabled={props.stateForm === "read"}
            required
          ></input>
          <span className="profile__error-message">{isMessageError.email}</span>
        </label>
        {props.stateForm === "read" && (
          <button className="profile__edit-button link" onClick={handleChangeStateEdit}>
            Редактировать
          </button>
        )}
        {props.stateForm === "read" && (
          <Link to="/" className="profile__exit-button link" onClick={props.logOf}>
            Выйти из аккаунта
          </Link>
        )} 
        {/* не забыть функцию выхода */}
        {props.stateForm === "edit" && (
          <button
            className={
              isValidForm
                ? "profile__submit-button button"
                : "profile__submit-button button button_disabled"
            }
            type="submit"
            onSubmit={props.onSubmit}
            disabled={!isValidForm}
          >
            Сохранить
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
