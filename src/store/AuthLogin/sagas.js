import { call, put, takeLatest } from "redux-saga/effects";
import { Redirect } from "react-router-dom";
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from "../constant";
import { push } from "connected-react-router";
import api from "../../network/index";
function* handleAuthLogin(request) {
  let { payload } = request;
  // console.log("checking..............", response);
  // let payload = {
  //   email: "sikandarkr30@gmail.com",
  //   password: "sikandar"
  // };
  // console.log("request", request);
  try {
    let response = yield call(api.login, payload);
    if (response.data.status === 200) {
      yield put({ type: LOGIN_SUCCESS, response });
      // alert(response.data.status);
      localStorage.setItem("Authorization", response.data.token);
      localStorage.setItem("isTrue", true);
      // return <Redirect to='/login'  />
      yield put(push("/profile"));
    }
    if (response.status === 409) {
      yield put({ type: LOGIN_ERROR, response });
    }
  } catch (error) {
    // console.log(error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

function* watchAuthLogin() {
  yield takeLatest(LOGIN_REQUEST, handleAuthLogin);
}

export function* loginSaga() {
  yield watchAuthLogin();
}
