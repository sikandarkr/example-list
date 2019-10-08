import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_ERROR
  } from "../constant";
  export const profileRequest = payload => ({
    type:  PROFILE_REQUEST,
    payload
  });
  
  export const profileSuccess = payload => ({
    type:  PROFILE_SUCCESS,
    payload
  });
  export const profileError = message => ({
    type:  PROFILE_ERROR,
    payload: message
  });
  