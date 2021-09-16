export const GET_BANNERS = 'BANNERS/GET BANNERS'
export const GET_BANNERS_SUCCESS = 'BANNERS/GET BANNERS SUCCESS'
export const GET_BANNERS_FAILURE = 'BANNERS/GET BANNERS FAILURE'

export interface IBanners {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export interface BannersState {
  banners: IBanners[],
  error:string
}

export interface BannersSuccessPayload {
  banners: IBanners[]
}

export interface BannersFailurePayload {
  error:string
}

export interface  GetBannersRequest {
  type: typeof GET_BANNERS
}

export type GetBannersSuccess = {
  type: typeof GET_BANNERS_SUCCESS
  payload: BannersSuccessPayload
}

export type GetBannersFailure = {
  type: typeof GET_BANNERS_FAILURE
  payload: BannersFailurePayload
}

export type BannersAction =
| GetBannersRequest
| GetBannersSuccess
| GetBannersFailure
