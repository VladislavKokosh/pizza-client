import {combineReducers} from "redux";
import {categoryReducer} from "./categoryReducer";
import {loaderReducer} from "./loaderReducer";
import {bannersReducer} from "./bannersReducer";

const reducer = combineReducers({
  category: categoryReducer,
  banners: bannersReducer,
  loader: loaderReducer
})

export type AppState = ReturnType<typeof reducer>

export default reducer;
