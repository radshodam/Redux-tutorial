import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
