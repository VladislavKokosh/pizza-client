import axios from "axios";
import { put, call } from 'redux-saga/effects'


import {hideLoader, showLoader} from "../actions/loader";
import {
  getSaleAsyncFailure,
  getSaleAsyncSuccess,
  getSaleByIdAsyncFailure,
  getSaleByIdAsyncSuccess
} from "../actions/sale";
import {GetSaleByIdRequest, ISale} from "../types/sale";

export function* getSale() {
  try {
    yield put(showLoader())
    const { data } = yield call(() => axios.get<ISale[]>('http://localhost:5050/sale'))
    yield put(getSaleAsyncSuccess({sale: data}))
    yield put(hideLoader())
  }
  catch (error:any) {
    yield put(getSaleAsyncFailure({error: error}))
    yield put(hideLoader())
  }
}

export function* getSaleById(request: GetSaleByIdRequest) {
  try {
    yield put(showLoader())
    const { data } = yield call(() => axios.get<ISale>(`http://localhost:5050/sale/${request.payload}`))
    yield put(getSaleByIdAsyncSuccess({saleById: data}))
    yield put(hideLoader())
  }
  catch (error:any){
    yield put(getSaleByIdAsyncFailure({error: error}))
    yield put(hideLoader())
  }
}
