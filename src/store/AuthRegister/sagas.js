import { call, put, takeLatest } from "redux-saga/effects";
import { Redirect } from "react-router-dom";
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST
} from "../constant";
import { push } from "connected-react-router";
import api from "../../network/index";
function* handleAuthRegister(request) {
  let { payload } = request;
  console.log(payload);
  try {
    let response = yield call(api.signup, payload);
    if (response.data.status === 201) {
      yield put({ type: REGISTER_SUCCESS, response });
      // return <Redirect to='/login'  />
      yield put(push("/login"));
    }
    if (response.data.status === 409) {
      yield put({ type: REGISTER_ERROR, response });
    }
  } catch (error) {
    // console.log(error);
    yield put({ type: REGISTER_ERROR, error });
  }
}

function* watchAuthRegister() {
  yield takeLatest(REGISTER_REQUEST, handleAuthRegister);
}

export function* registerSaga() {
  yield watchAuthRegister();
}
