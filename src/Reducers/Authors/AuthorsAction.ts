import * as ActionTypes from "./AuthorsActionTypes";

/**
 * Action to get repo owner.
 */
export interface IGetRepoOwnerData {
  type: typeof ActionTypes.REPO_OWNER_DATA_GET;
}

/**
 * Initiates getting repo data
 * @method
 * @returns {IGetRepoOwnerData} .
 */
export function getRepoOwnerData(): IGetRepoOwnerData {
  return { type: ActionTypes.REPO_OWNER_DATA_GET };
}

/**
 * Action to handle get repo owner succesfully.
 */
export interface IGetRepoOwnerDataSuccess {
  type: typeof ActionTypes.REPO_OWNER_GET_DATA_SUCCESS;
  userName: string;
}

/**
 * Initiates getting repo data
 * @method
 * @param {string} userName the userName to update
 * @returns {IGetRepoOwnerDataSuccess} .
 */
export function getRepoOwnerDataSuccess(userName: string): IGetRepoOwnerDataSuccess {
  return { type: ActionTypes.REPO_OWNER_GET_DATA_SUCCESS, userName };
}

/**
 * Action to handle get repo owner failure.
 */
export interface IGetRepoOwnerDataFail {
  type: typeof ActionTypes.REPO_OWNER_GET_DATA_FAIL;
  error: string;
}

/**
 * Initiates getting repo data
 * @method
 * @returns {IGetRepoOwnerData} .
 */
export function getRepoOwnerDataFail(error: string): IGetRepoOwnerDataFail {
  return { type: ActionTypes.REPO_OWNER_GET_DATA_FAIL, error };
}

export type AuthorsActionTypes = IGetRepoOwnerData | IGetRepoOwnerDataSuccess | IGetRepoOwnerDataFail;
