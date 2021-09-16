import {
  CategoryFailurePayload,
  CategorySuccessPayload,
  GET_CATEGORY,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
  GetCategoryFailure,
  GetCategoryRequest,
  GetCategorySuccess
} from "../types/category";


export const getCategoryAsync = (): GetCategoryRequest => (
  {
    type: GET_CATEGORY
  }
)

export const getCategoryAsyncSuccess = (
  data: CategorySuccessPayload
) : GetCategorySuccess => (
  {
    type: GET_CATEGORY_SUCCESS,
    payload: data
  }
)

export const getCategoryAsyncFailure = (
  error: CategoryFailurePayload
) : GetCategoryFailure => (
  {
    type: GET_CATEGORY_FAILURE,
    payload: error
  }
)
