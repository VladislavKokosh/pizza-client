import {
  GET_SALE,
  GET_SALE_BY_ID,
  GET_SALE_BY_ID_FAILURE,
  GET_SALE_BY_ID_SUCCESS,
  GET_SALE_FAILURE,
  GET_SALE_SUCCESS,
  GetSaleByIdFailure,
  GetSaleByIdRequest,
  GetSaleByIdSuccess,
  GetSaleFailure,
  GetSaleRequest,
  GetSaleSuccess,
  SaleByIdFailurePayload,
  SaleByIdSuccessPayload,
  SaleFailurePayload,
  SaleSuccessPayload
} from "../types/sale";

export const getSaleAsync = (): GetSaleRequest => (
  {
    type: GET_SALE
  }
)

export const getSaleAsyncSuccess = (
  data: SaleSuccessPayload
): GetSaleSuccess => (
  {
    type: GET_SALE_SUCCESS,
    payload: data
  }
)

export const getSaleAsyncFailure = (
  error: SaleFailurePayload
): GetSaleFailure => (
  {
    type: GET_SALE_FAILURE,
    payload: error
  }
)

export const getSaleByIdAsync = (
  id: string
): GetSaleByIdRequest => (
  {
    type: GET_SALE_BY_ID,
    payload: id
  }
)

export const getSaleByIdAsyncSuccess = (
  data: SaleByIdSuccessPayload
): GetSaleByIdSuccess => (
  {
    type: GET_SALE_BY_ID_SUCCESS,
    payload: data
  }
)

export const getSaleByIdAsyncFailure = (
  error: SaleByIdFailurePayload
): GetSaleByIdFailure => (
  {
    type: GET_SALE_BY_ID_FAILURE,
    payload: error
  }
)
