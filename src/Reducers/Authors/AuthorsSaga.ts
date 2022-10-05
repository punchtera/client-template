import { delay, put, takeEvery } from "redux-saga/effects";

import { getRepoOwnerDataSuccess, getRepoOwnerDataFail } from "./AuthorsAction";
import * as ActionTypes from "./AuthorsActionTypes";

const DEFAULT_CONFIG_DELAY = 2000;
/**
 * The function to load activity common data.
 * @param {IGetCommonFormData} action The action.
 */
function* handleLoadRepoOwnerData() {
  try {
    yield delay(DEFAULT_CONFIG_DELAY);
    const repoOwner = "punchtera";
    yield put(getRepoOwnerDataSuccess(repoOwner));
  } catch (error) {
    if (!(error instanceof Error)) {
      return;
    }
    yield put(getRepoOwnerDataFail(error.message));
  }
}

export { handleLoadRepoOwnerData as handleLoadActivityCommonData };

/**
 * Default function to add saga watchers for activated actions by using "effects"
 * @generator
 */
export default function* getData() {
  yield takeEvery(ActionTypes.REPO_OWNER_DATA_GET, handleLoadRepoOwnerData);
}
