import { call, delay, put, race, takeEvery } from "redux-saga/effects";

import { getActivityCommonDataFail, getActivityCommonDataSuccess, IGetActivityCommonData } from "./AuthorsAction";
import { REPO_OWNER_GET_SUCCESS } from "./AuthorsActionTypes";

/**
 * The function to load activity common data.
 * @param {IGetCommonFormData} action The action.
 * @returns {void} .
 */
function* handleLoadActivityCommonData(action: IGetActivityCommonData) {
  try {
    const { result, timeout } = yield race({
      result: call(fetchActivityCommonData, action.tenantType),
      timeout: delay(getDefaultApiTimeOutConfiguration()),
    });

    if (timeout) {
      yield put(getActivityCommonDataFail(GENERIC_API_TIMEOUT_ERROR));
      return;
    }

    switch (result.httpStatusCode) {
      case HttpStatusCode.Ok:
        yield put(getActivityCommonDataSuccess((result.parsedBody as IGetActivityCommonDataOkResult).data));
        break;
      case HttpStatusCode.BadRequest:
        yield put(getActivityCommonDataFail((result.parsedBody as IApiErrorResult).error.message));
        break;
      case HttpStatusCode.NotFound:
        yield put(getActivityCommonDataFail((result.parsedBody as IApiErrorResult).error.message));
        break;
      default:
        yield put(getActivityCommonDataFail((result.parsedBody as IApiErrorResult).error.message));
        break;
    }
  } catch (error) {
    yield put(getActivityCommonDataFail(error.message));
  }
}

export { handleLoadActivityCommonData };

/**
 * Default function to add saga watchers for activated actions by using "effects"
 * @generator
 * @returns {void}
 */
export default function* getData() {
  yield takeEvery(ACTIVITY_COMMON_DATA_LOAD, handleLoadActivityCommonData);
}
