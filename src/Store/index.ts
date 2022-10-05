import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

import authors from "../Reducers/Authors";
import authorsSaga from "../Reducers/Authors/AuthorsSaga";
import createRouter from "../Reducers/Router";
import { IAppState } from "../Reducers/IAppState";

export function createStore() {
  const router = createRouter();
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers<IAppState>({
    authors,
    router,
  });

  const store = configureStore({ reducer: rootReducer, middleware: [logger, sagaMiddleware] });
  sagaMiddleware.run(authorsSaga);
  return store;
}
