import { React, useState, useEffect, useContext } from "react";
import FormEditProfile from "../FormEditProfile/FormEditProfile";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  function toggleHeader() {
    props.header(true);
  }
  function toggleFooter() {
    props.footer(false);
  }

  useEffect(() => {
    toggleFooter();
    toggleHeader();
    if (props.stateForm === "read") {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [props, currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      email,
    });
  }

  return (
    <FormEditProfile
      name="profile"
      header={props.header}
      footer={props.footer}
      onSubmit={handleSubmit}
      stateForm={props.stateForm}
      changeState={props.changeStateForm}
      userName={name}
      userEmail={email}
      setName={setName}
      setEmail={setEmail}
      logOf={props.logOf}
      answer={props.answer}
    ></FormEditProfile>
  );
}

export default Profile;
