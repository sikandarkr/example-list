import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../constant";
export const registerRequest = payload => ({
  type: REGISTER_REQUEST,
  payload
});

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload
});

export const registerError = message => ({
  type: REGISTER_ERROR,
  payload: message
});
