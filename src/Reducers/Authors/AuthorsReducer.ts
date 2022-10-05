import { AuthorsActionTypes } from "./AuthorsAction";
import { IAuthorsState } from "./IAuthorsState";

/**
 * Initialize an empty authors state.
 * @returns {IAuthorsState} authors state
 */
export const initialState: IAuthorsState = {
  repoOwner: "",
};

export default function authorsReducer(state: IAuthorsState = initialState, action: AuthorsActionTypes): IAuthorsState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
