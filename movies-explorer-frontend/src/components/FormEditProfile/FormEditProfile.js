import React from "react";
import { Link } from "react-router-dom";


function FormEditProfile(props) {
  // function toggleHeader() {
  //   props.header(true);
  // }
  // function toggleFooter() {
  //   props.footer(false);
  // }
  // const currentUser = React.useContext(CurrentUserContext);
  // const [name, setName] = React.useState(currentUser.name); // потом в скобках будет пусто
  // const [email, setEmail] = React.useState(currentUser.email); // потом в скобках будет пусто
  // const [stateForm, setStateForm] = React.useState(""); // состояние формы (просмотр, редактирование, ошибка)
  const [isMessageError, setMessageError] = React.useState({
    name: "",
    email: "",
  });
  const [isValidForm, setIsValidForm] = React.useState(true); // при открытии окна редактирования профиля подгружаются нормальные данные (должны по крайней мере)
  
  

  // function handleSubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();
  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   props.onUpdate({
  //     name,
  //     email,
  //   });
  // }

  function handleChangeStateEdit(e) {
    e.preventDefault();
    props.changeState("edit");
  }

  function handleChangeName(e) {
    props.setName(e.target.value);
    setMessageError({ ...isMessageError, name: e.target.validationMessage });
  }
  function handleChangeEmail(e) {
    props.setEmail(e.target.value);
    setMessageError({ ...isMessageError, email: e.target.validationMessage });
  }

  function checkValidity(e) {
    const valid = e.target.form.checkValidity();
    setIsValidForm(valid);
  }

  return (
    <section className="profile">
      <form
        className="profile__form"
        name={props.name}
        onSubmit={props.onSubmit}
        onChange={checkValidity}
        noValidate
      >
        <h2 className="profile__title">Привет, {props.userName}!</h2>
        {/* сейчас name меняется при вводе данных, потом заменю на currentUser.name */}
        <label className="profile__label">
          Имя
          <input
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
