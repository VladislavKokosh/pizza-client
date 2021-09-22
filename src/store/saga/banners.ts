import axios from "axios";
import { put, call } from 'redux-saga/effects'

import {hideLoader, showLoader} from "../actions/loader";
import {getBannersAsyncFailure, getBannersAsyncSuccess} from "../actions/banners";
import {IBanners} from "../types/banners";

export function* getBanners() {
  try {
    yield put(showLoader())
    const { data } = yield call(() => axios.get<IBanners[]>('http://localhost:5050/banner'))
    yield put(getBannersAsyncSuccess({banners: data}))
    yield put(hideLoader())
  }
  catch (error:any) {
    yield put(getBannersAsyncFailure({error: error}))
    yield put(hideLoader())
  }
}
