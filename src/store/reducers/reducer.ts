import {combineReducers} from "redux";
import {categoryReducer} from "./categoryReducer";
import {loaderReducer} from "./loaderReducer";
import {bannersReducer} from "./bannersReducer";
import {saleReducer} from "./saleReducer";

const reducer = combineReducers({
  category: categoryReducer,
  banners: bannersReducer,
  loader: loaderReducer,
  sale: saleReducer
})

export type AppState = ReturnType<typeof reducer>

export default reducer;
