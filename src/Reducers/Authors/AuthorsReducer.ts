import { AUTHORS_REPO_OWNER_GET } from "../../Constants/ActionTypes";
import { AuthorsActionTypes } from "./AuthorsAction";
import { IAuthorsState } from "./IAuthorsState";

/**
 * Initialize an empty authors state.
 * @returns {IAuthorsState} authors state
 */
export const initialState: IAuthorsState = {
  repoOwner: "punchtera",
};

export default function authorsReducer(state: IAuthorsState = initialState, action: AuthorsActionTypes): IAuthorsState {
  switch (action.type) {
    case AUTHORS_REPO_OWNER_GET: {
      return { ...state, repoOwner: "fake owner" };
    }
    default: {
      return state;
    }
  }
}
