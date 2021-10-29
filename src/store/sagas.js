import { all } from "redux-saga/effects";
import demoSagas from "../views/Demo/saga";

function initSaga(sagas) {
  const content = [];
  for (let i in sagas) {
    content.push(sagas[i]());
  }
  return content;
}

export default function* rootSaga() {
  yield all([...initSaga(demoSagas)]);
}
