import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default process.env.NODE_ENV === "development"
  ? createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
  : createStore(rootReducer, applyMiddleware(thunk));
