import { combineReducers } from 'redux';
import authors from './Authors/AuthorsReducer';


export default function createReducer() {
    const rootReducer = combineReducers({
        authors
    });

    return rootReducer;
}