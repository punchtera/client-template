import * as AuthorsActions from "./AuthorsAction";
import * as AuthorsActionTypes from "./AuthorsActionTypes";
import { IAuthorsState } from "./IAuthorsState";

/**
 * Initialize an empty authors state.
 * @returns {IAuthorsState} authors state
 */
export const initialState: IAuthorsState = {
  repoOwner: "",
};

export default function authorsReducer(state: IAuthorsState = initialState, action: AuthorsActions.AuthorsActionTypes): IAuthorsState {
  switch (action.type) {
    case AuthorsActionTypes.REPO_OWNER_GET_DATA_SUCCESS: {
      return {
        ...state,
        repoOwner: action.userName,
      };
    }
    default: {
      return state;
    }
  }
}
