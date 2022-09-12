// todo refactor this to initiate the store correctly
import { createStore, combineReducers } from "redux";

import authors from "../Reducers/Authors";
import { IAppState } from "../Reducers/IAppState";

export function configureStore() {
  const rootReducer = combineReducers<IAppState>({
    authors,
  });

  const store = createStore(rootReducer);

  return store;
}
