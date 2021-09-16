export const GET_CATEGORY = 'CATEGORY/GET CATEGORY'
export const GET_CATEGORY_SUCCESS = 'CATEGORY/GET CATEGORY SUCCESS'
export const GET_CATEGORY_FAILURE = 'CATEGORY/GET CATEGORY FAILURE'

export interface ICategory {
  id: string
  title: string
  image: string
  description: string
}

export interface CategoryState {
  category: ICategory[],
  error:string
}

export interface CategorySuccessPayload {
  category: ICategory[]
}

export interface CategoryFailurePayload {
  error: string
}

export interface GetCategoryRequest {
  type: typeof GET_CATEGORY
}

export type GetCategorySuccess = {
  type: typeof GET_CATEGORY_SUCCESS;
  payload: CategorySuccessPayload;
}

export type GetCategoryFailure = {
  type: typeof  GET_CATEGORY_FAILURE;
  payload: CategoryFailurePayload;
}

export type CategoryAction =
  | GetCategoryRequest
  | GetCategorySuccess
  | GetCategoryFailure
