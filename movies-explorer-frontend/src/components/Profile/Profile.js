import React from "react";
import FormEditProfile from "../FormEditProfile/FormEditProfile";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  function toggleHeader() {
    props.header(true);
  }
  function toggleFooter() {
    props.footer(false);
  }

  const [name, setName] = React.useState(currentUser.name); // потом в скобках будет пусто
  const [email, setEmail] = React.useState(currentUser.email); // пот
  const [stateForm, setStateForm] = React.useState(""); // состояние формы (просмотр, редактирование, ошибка)
  React.useEffect(() => {
    toggleFooter();
    toggleHeader();
    setName(currentUser.name); 
    setEmail(currentUser.email);
    setStateForm("read"); // тут можно менять состояние (read, edit, error)
  }, [currentUser]);
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
      // onUpdate={props.onUpdateUser}
      onSubmit = {handleSubmit}
      stateForm={stateForm}
      changeState={setStateForm}
      userName = {name}
      userEmail = {email}
      // onSubmit={handleSubmit}
      setName={setName}
      setEmail={setEmail}
      logOf={props.logOf}
    ></FormEditProfile>
  );
}

export default Profile;
