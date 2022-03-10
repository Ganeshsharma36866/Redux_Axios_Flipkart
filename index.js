// Root Reducer
import { combineReducers } from "redux";
import fetchDataReducer from "./fetchDataReducer";
import { productReducer } from "./productreducer";

const reducers = combineReducers({
    allProducts: productReducer,
    appApi: fetchDataReducer

});
export default reducers;