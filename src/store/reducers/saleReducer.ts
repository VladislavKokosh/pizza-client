import {
  GET_SALE_BY_ID_FAILURE,
  GET_SALE_BY_ID_SUCCESS,
  GET_SALE_FAILURE,
  GET_SALE_SUCCESS,
  SaleAction,
  SaleState
} from "../types/sale";


const initState: SaleState = {
  sale: [],
  saleById:
    {
      id: '',
      title: '',
      image: '',
      link: '',
      description: ''
    },
  error: ''
}

export const saleReducer = (state = initState, action: SaleAction) => {
  switch (action.type) {
    case GET_SALE_SUCCESS:
      return { ...state, sale: action.payload.sale}
    case GET_SALE_FAILURE:
      return { ...state, error: action.payload.error}
    case GET_SALE_BY_ID_SUCCESS:
      return { ...state, saleById: action.payload.saleById}
    case GET_SALE_BY_ID_FAILURE:
      return { ...state, error: action.payload.error}
    default: return state
  }
}
