import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { initState, reducer } from "./reducers";
import sagas from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadState) => {
  const store = createStore(
    combineReducers(reducer),
    preloadState || initState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
};
