
import {
    AUTHORS_REPO_OWNER_GET,
    AUTHORS_REPO_OWNER_GET_SUCCESS,
    AUTHORS_REPO_OWNER_GET_FAIL
} from "../../Constants/ActionTypes";

/**
 * Action to get repo owner.
 */
export interface IGetRepoOwner {
    type: typeof AUTHORS_REPO_OWNER_GET;
}

/**
 * Action to handle get repo owner succesfully.
 */
export interface IGetRepoOwnerSuccess {
    type: typeof AUTHORS_REPO_OWNER_GET_SUCCESS;
}

/**
 * Action to handle get repo owner failure.
 */
export interface IGetRepoOwnerFail {
    type: typeof AUTHORS_REPO_OWNER_GET_FAIL;
}

export type AuthorsActionTypes =
    | IGetRepoOwner
    | IGetRepoOwnerSuccess
    | IGetRepoOwnerFail;