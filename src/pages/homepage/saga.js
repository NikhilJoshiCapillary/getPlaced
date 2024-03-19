import * as types from "./constant.js";
import { put, call, takeLatest } from "redux-saga/effects";
import { applyJob } from "../../api";
import { applyForJobSuccess, applyForJobFail } from "./actions.js";

export function* workerGetJob(action) {
  const { payload } = action;
  try {
    console.log("workerSaga called", payload.i, payload.clean_user_email);
    const result = yield call(applyJob, payload.i, payload.clean_user_email);
    yield put(applyForJobSuccess(result));
  } catch (e) {
    yield put(applyForJobFail(e));
    console.log("Error", e);
  }
}

export function* watcherGetJob() {
  console.log("watcherSaga called");
  yield takeLatest(types.APPLY, workerGetJob);
}
