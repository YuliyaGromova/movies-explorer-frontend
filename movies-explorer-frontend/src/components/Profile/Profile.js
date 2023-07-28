import React from "react";
import FormEditProfile from "../FormEditProfile/FormEditProfile";

function Profile(props) {
    // const title=`Привет, ${props.login}!`;
    return(
       <FormEditProfile name="profile" nameUser="sweety" userEmail="cherry@eossot.ru"></FormEditProfile>
    )
}

export default Profile;