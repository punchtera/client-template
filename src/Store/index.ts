import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../Reducers';

export function createStore() {
    const store = configureStore({ reducer: rootReducer });
    return store;
}
