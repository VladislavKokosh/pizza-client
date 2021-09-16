import {CategoryAction, CategoryState, GET_CATEGORY_FAILURE, GET_CATEGORY_SUCCESS} from "../types/category";


const initState: CategoryState = {
  category: [],
  error: ''
}

export const categoryReducer = (state = initState, action: CategoryAction) => {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      return { ...state, category: action.payload.category}
    case GET_CATEGORY_FAILURE:
      return { ...state, error: action.payload.error}
    default: return state
  }
}
