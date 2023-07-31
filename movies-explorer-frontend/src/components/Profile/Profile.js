import React from "react";
import FormEditProfile from "../FormEditProfile/FormEditProfile";

function Profile(props) {
  return (
    <FormEditProfile
      name="profile"
      header={props.header}
      footer={props.footer}
      onUpdateUser={props.onUpdateUser}
      logOf={props.logOf}
    ></FormEditProfile>
  );
}

export default Profile;
