import * as ActionTypes from "./AuthorsActionTypes";

/**
 * Action to get repo owner.
 */
export interface IGetRepoOwner {
  type: typeof ActionTypes.REPO_OWNER_GET;
}

/**
 * Initiates getting repo data
 * @method
 * @returns {IGetRepoOwner} .
 */
export function getRepoOwner(): IGetRepoOwner {
  return { type: ActionTypes.REPO_OWNER_GET };
}

/**
 * Action to handle get repo owner succesfully.
 */
export interface IGetRepoOwnerSuccess {
  type: typeof ActionTypes.REPO_OWNER_GET_SUCCESS;
  userName: string;
}

/**
 * Initiates getting repo data
 * @method
 * @param {string} userName the userName to update
 * @returns {IGetRepoOwnerSuccess} .
 */
export function getRepoOwnerSuccess(userName: string): IGetRepoOwnerSuccess {
  return { type: ActionTypes.REPO_OWNER_GET_SUCCESS, userName };
}

/**
 * Action to handle get repo owner failure.
 */
export interface IGetRepoOwnerFail {
  type: typeof ActionTypes.REPO_OWNER_GET_FAIL;
}

/**
 * Initiates getting repo data
 * @method
 * @returns {IGetRepoOwner} .
 */
export function getRepoOwnerFail(): IGetRepoOwnerFail {
  return { type: ActionTypes.REPO_OWNER_GET_FAIL };
}

export type AuthorsActionTypes = IGetRepoOwner | IGetRepoOwnerSuccess | IGetRepoOwnerFail;
