import { applyMiddleware, createStore } from "redux";
import reducers from "../Reducers/index"
import thunk from 'redux-thunk'

let store = createStore(reducers, {}, applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;