import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";
import authReducer from "./AuthRegister/reducers";
import loginReducer from "./AuthLogin/reducers";
import profileReducer from "./AuthProfile/reducers";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { registerSaga } from "./AuthRegister/sagas";
import { loginSaga } from "./AuthLogin/sagas";
import {profileSaga} from './AuthProfile/sagas';
let history = createBrowserHistory();
export const rootReducer = combineReducers({
  router: connectRouter(history),
  authReducer,
  loginReducer,
  profileReducer
});

export function* rootSaga() {
  yield all([call(registerSaga), call(loginSaga),call(profileSaga)]);
}
