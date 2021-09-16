import axios from "axios";
import { put, call } from 'redux-saga/effects'

import { ICategory } from "../types/category";

import {
  getCategoryAsyncFailure,
  getCategoryAsyncSuccess
} from "../actions/category";
import {hideLoader, showLoader} from "../actions/loader";

export function* getCategory() {
  try {
    yield put(showLoader())
    const { data } = yield call(() => axios.get<ICategory[]>('http://localhost:5050/category'))
    yield put(getCategoryAsyncSuccess({category: data}))
    yield put(hideLoader())
  }
  catch (error:any) {
    yield put(getCategoryAsyncFailure({error: error}))
    yield put(hideLoader())
  }
}