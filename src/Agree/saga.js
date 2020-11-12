import { takeEvery, put, call } from "redux-saga/effects";
import { agreeApi } from "./agreeApi";

export function* agree(action) {
  try {
    // loading
    yield put({
      type: "AGREE_REQUEST",
    });

    // * write to file, but there is no way to change redux state
    // * res === {success: true}
    const res = yield call(agreeApi, { agree: action.agree });

    if (res) {
      // stop loading and inject data
      yield put({
        type: "AGREE_SUCCESS",
        agree: action.agree,
      });

      // go to detail page
      action.history.push("/detail");
    } else {
      yield put({
        type: "AGREE_FAIL",
      });
    }
  } catch (error) {
    yield put({
      type: "AGREE_FAIL",
    });
  }
}

export function* agreeSaga() {
  yield takeEvery("ON_AGREE", agree);
}
