import { all, takeEvery } from 'redux-saga/effects'
import {GET_CATEGORY} from "../types/category";
import {getCategory} from "./category";
import {GET_BANNERS} from "../types/banners";
import {getBanners} from "./banners";
import {GET_SALE, GET_SALE_BY_ID} from "../types/sale";
import {getSale, getSaleById} from "./sale";

function* watchCategory() {
  yield takeEvery(GET_CATEGORY, getCategory)
}

function* watchBanners() {
  yield takeEvery(GET_BANNERS, getBanners)
}

function* watchSale() {
  yield takeEvery(GET_SALE, getSale)
  // @ts-ignore
  yield takeEvery(GET_SALE_BY_ID, getSaleById)
}

export default function* rootSaga() {
  yield all([
    watchCategory(),
    watchBanners(),
    watchSale()
  ])
}
