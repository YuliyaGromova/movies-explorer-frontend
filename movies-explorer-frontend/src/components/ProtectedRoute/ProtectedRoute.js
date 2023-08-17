import { React, useEffect} from "react";
import { Navigate } from "react-router-dom";
import { AUTH_ERROR } from "../../utils/message";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  useEffect(() => {
    if (!props.loggedIn) {
      props.setMessageToUser(AUTH_ERROR);
      props.openTooltip();
    }  
  },[])

  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRouteElement;
