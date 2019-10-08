import { call, put, takeLatest } from "redux-saga/effects";
import { Redirect } from "react-router-dom";
import { PROFILE_SUCCESS, PROFILE_ERROR, PROFILE_REQUEST } from "../constant";
import { push } from "connected-react-router";
import api from "../../network/index";
function* handleProfile(request) {
  let { payload } = request;
  // console.log("checking..............", response);
  // let payload = {
  //   email: "sikandarkr30@gmail.com",
  //   password: "sikandar"
  // };
  
  try {
    let response = yield call(api.profile, payload);
    if (response.data.status === 200) {
    //  alert(response.data.profiledetail.profilePic);
      yield put({ type:  PROFILE_SUCCESS, response });
    }
    if (response.status === 409) {
      yield put({ type: PROFILE_ERROR, response });
    }
  } catch (error) {
    // console.log(error);
    yield put({ type: PROFILE_ERROR, error });
  }
}

function* watchProfile() {
  yield takeLatest(PROFILE_REQUEST,  handleProfile);
}

export function* profileSaga() {
  yield watchProfile();
}
