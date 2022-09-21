import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import authors from "../Reducers/Authors";
import createRouter from "../Reducers/Router";
import { IAppState } from "../Reducers/IAppState";

export function createStore() {
  const router = createRouter();

  const rootReducer = combineReducers<IAppState>({
    authors,
    router,
  });

  return configureStore({ reducer: rootReducer, middleware: [logger] });
}
