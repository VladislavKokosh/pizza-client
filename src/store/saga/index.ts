import { all, takeEvery } from 'redux-saga/effects'
import {GET_CATEGORY} from "../types/category";
import {getCategory} from "./category";

function* watchCategory() {
  yield takeEvery(GET_CATEGORY, getCategory)
}

export default function* rootSaga() {
  yield all([
    watchCategory()
  ])
}
