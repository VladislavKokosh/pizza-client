import { createSelector } from 'reselect'
import {AppState} from "../reducers/reducer";


const getCategory = (state: AppState) => state.category.category;
const getError = (state: AppState) => state.category.error;

export const getCategorySelector = createSelector(getCategory, (category) => category)
export const getErrorSelector = createSelector(getError, (error) => error)
