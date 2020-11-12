import { all } from "redux-saga/effects";
import { agreeSaga } from "./Agree/saga";
import { detailSaga } from "./Detail/saga";

export default function* rootSaga() {
  yield all([agreeSaga(), detailSaga()]);
}
