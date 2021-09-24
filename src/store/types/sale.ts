export const GET_SALE = 'SALE/GET SALE'
export const GET_SALE_SUCCESS = 'SALE/GET SALE SUCCESS'
export const GET_SALE_FAILURE = 'SALE/GET SALE FAILURE'
export const GET_SALE_BY_ID = 'SALE/GET SALE BY ID'
export const GET_SALE_BY_ID_SUCCESS = 'SALE/GET SALE BY ID SUCCESS'
export const GET_SALE_BY_ID_FAILURE = 'SALE/GET SALE BY ID FAILURE'

export interface ISale {
  id: string,
  title: string,
  image: string,
  link: string,
  description: string
}

export interface SaleState {
  sale: ISale[],
  saleById: ISale,
  error: string
}

export interface SaleSuccessPayload {
  sale: ISale[]
}
export interface SaleFailurePayload {
  error: string
}

export interface GetSaleRequest {
  type: typeof GET_SALE
}
export type GetSaleSuccess = {
  type: typeof GET_SALE_SUCCESS;
  payload: SaleSuccessPayload;
}
export type GetSaleFailure = {
  type: typeof GET_SALE_FAILURE;
  payload: SaleFailurePayload
}

export interface SaleByIdSuccessPayload {
  saleById: ISale
}
export interface SaleByIdFailurePayload {
  error: string
}

export type GetSaleByIdRequest = {
  type: typeof GET_SALE_BY_ID,
  payload: string
}

export type GetSaleByIdSuccess = {
  type: typeof GET_SALE_BY_ID_SUCCESS,
  payload: SaleByIdSuccessPayload
}

export type GetSaleByIdFailure = {
  type: typeof GET_SALE_BY_ID_FAILURE,
  payload: SaleByIdFailurePayload
}

export type SaleAction =
  | GetSaleRequest
  | GetSaleSuccess
  | GetSaleFailure
  | GetSaleByIdRequest
  | GetSaleByIdSuccess
  | GetSaleByIdFailure
