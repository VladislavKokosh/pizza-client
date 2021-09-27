import { createSelector } from 'reselect'
import {AppState} from "../reducers/reducer";


const getSale = (state: AppState) => state.sale.sale;
const getError = (state: AppState) => state.sale.error;
const getSaleById = (state: AppState) => state.sale.saleById;
const getOtherSale = (state: AppState) => state.sale.sale;

export const getSaleSelector = createSelector(getSale, (sale) => sale)
export const getSaleByIdSelector = createSelector(getSaleById, (saleById) => saleById)
export const getOtherSaleSelector = (id: string) => createSelector(getOtherSale,(sale) => sale.filter(sale => sale.id !== id))
export const getErrorSelector = createSelector(getError, (error) => error)
