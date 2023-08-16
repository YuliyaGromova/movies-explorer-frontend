import {
  FORBIDDEN_ERROR,
  NOT_FOUND_ERROR,
  AUTH_ERROR,
  UNIQUE_ERROR,
  VALIDATION_ERROR,
  SERVER_ERROR,
} from "./message.js";

function getErrorMessage(status) {
  const message =
    status === 403
      ? FORBIDDEN_ERROR
      : status === 404
      ? NOT_FOUND_ERROR
      : status === 401
      ? AUTH_ERROR
      : status === 409
      ? UNIQUE_ERROR
      : status === 400
      ? VALIDATION_ERROR
      : SERVER_ERROR;
  return message;
}

export default getErrorMessage;
