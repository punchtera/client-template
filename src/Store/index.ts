import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authors from "../Reducers/Authors";
import { IAppState } from "../Reducers/IAppState";

export function createStore() {
  const rootReducer = combineReducers<IAppState>({
    authors,
  });

  const store = configureStore({ reducer: rootReducer });

  return store;
}
