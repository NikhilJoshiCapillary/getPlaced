import { createStore } from "redux";
import global from "./pages/homepage/reducers";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(global, applyMiddleware(sagaMiddleware));
export default store;
export { sagaMiddleware };
