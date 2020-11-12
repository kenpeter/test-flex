import { takeEvery, put, call } from "redux-saga/effects";
import { detailApi } from "./detailApi";

export function* detail(action) {
  try {
    // loading
    yield put({
      type: "DETAIL_REQUEST",
    });

    const res = yield call(detailApi);

    if (res) {
      // stop loading
      yield put({
        type: "DETAIL_SUCCESS",
        name: res.name,
      });
    } else {
      yield put({
        type: "DETAIL_FAIL",
      });
    }
  } catch (error) {
    yield put({
      type: "DETAIL_FAIL",
    });
  }
}

export function* detailSaga() {
  yield takeEvery("ON_DETAIL", detail);
}
