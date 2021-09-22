import { createSelector } from 'reselect'
import {AppState} from "../reducers/reducer";


const getBanners = (state: AppState) => state.banners.banners;
const getError = (state: AppState) => state.banners.error;

export const getBannersSelector = createSelector(getBanners, (banners) => banners)
export const getErrorSelector = createSelector(getError, (error) => error)
