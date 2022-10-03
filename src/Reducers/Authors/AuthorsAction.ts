import { REPO_OWNER_GET, REPO_OWNER_GET_SUCCESS, REPO_OWNER_GET_FAIL } from "./AuthorsActionTypes";

/**
 * Action to get repo owner.
 */
export interface IGetRepoOwner {
  type: typeof REPO_OWNER_GET;
}

/**
 * Action to handle get repo owner succesfully.
 */
export interface IGetRepoOwnerSuccess {
  type: typeof REPO_OWNER_GET_SUCCESS;
}

/**
 * Action to handle get repo owner failure.
 */
export interface IGetRepoOwnerFail {
  type: typeof REPO_OWNER_GET_FAIL;
}

export type AuthorsActionTypes = IGetRepoOwner | IGetRepoOwnerSuccess | IGetRepoOwnerFail;
