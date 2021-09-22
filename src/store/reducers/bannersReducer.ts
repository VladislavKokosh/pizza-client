import {BannersAction, BannersState, GET_BANNERS_FAILURE, GET_BANNERS_SUCCESS} from "../types/banners";


const initState: BannersState = {
  banners: [],
  error: ''
}

export const bannersReducer = (state = initState, action: BannersAction) => {
  switch (action.type) {
    case GET_BANNERS_SUCCESS:
      return { ...state, banners: action.payload.banners}
    case GET_BANNERS_FAILURE:
      return { ...state, error: action.payload.error}
    default: return state
  }
}
