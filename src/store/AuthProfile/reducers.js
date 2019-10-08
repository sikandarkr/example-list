import { PROFILE_ERROR, PROFILE_SUCCESS, PROFILE_REQUEST } from "../constant";
const initialState = {
  isSuccess: false,
  user: {}
};
export default (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case PROFILE_REQUEST:
      newState = { ...state, loading: true };
      break;
    case PROFILE_SUCCESS:
      newState = {
        ...state,
        profileInfo: action.response,
        error: null,
        isSuccess: true
      };
      break;
    case PROFILE_ERROR:
      newState = {
        ...state,
        error: action.error.response,
        profileInfo: null,
        isSuccess: false
      };
      break;
    default:
      newState = newState;
  }
  return newState;
};
