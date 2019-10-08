import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST
} from "../constant";
const initialState = {
  isSuccess: false,
  user: {}
};
export default (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case REGISTER_REQUEST:
      newState = { ...state, loading: true };
      break;

    case REGISTER_SUCCESS:
      newState = {
        ...state,
        registerInfo: action.response,
        error: null,
        isSuccess: true
      };
      break;

    case REGISTER_ERROR:
      newState = {
        ...state,
        error: action.error.response,
        registerInfo: null,
        isSuccess: false
      };
      break;
    default:
      newState = newState;
  }
  return newState;
};
