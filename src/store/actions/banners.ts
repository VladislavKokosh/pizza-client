import {
  BannersFailurePayload,
  BannersSuccessPayload,
  GET_BANNERS,
  GET_BANNERS_SUCCESS, GetBannersFailure,
  GET_BANNERS_FAILURE,
  GetBannersRequest,
  GetBannersSuccess
} from "../types/banners";


export const getBannersAsync = (): GetBannersRequest => (
  {
    type: GET_BANNERS
  }
)

export const getBannersAsyncSuccess = (
  data: BannersSuccessPayload
) : GetBannersSuccess => (
  {
    type: GET_BANNERS_SUCCESS,
    payload: data
  }
)

export const getBannersAsyncFailure = (
  error: BannersFailurePayload
) : GetBannersFailure => (
  {
    type: GET_BANNERS_FAILURE,
    payload: error
  }
)
