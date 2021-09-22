import { all, takeEvery } from 'redux-saga/effects'
import {GET_CATEGORY} from "../types/category";
import {getCategory} from "./category";
import {GET_BANNERS} from "../types/banners";
import {getBanners} from "./banners";

function* watchCategory() {
  yield takeEvery(GET_CATEGORY, getCategory)
}

function* watchBanners() {
  yield takeEvery(GET_BANNERS, getBanners)
}

export default function* rootSaga() {
  yield all([
    watchCategory(),
    watchBanners()
  ])
}
