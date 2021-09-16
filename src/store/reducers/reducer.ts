import {combineReducers} from "redux";
import {categoryReducer} from "./categoryReducer";
import {loaderReducer} from "./loaderReducer";

const reducer = combineReducers({
  category: categoryReducer,
  loader: loaderReducer
})

export type AppState = ReturnType<typeof reducer>

export default reducer;
