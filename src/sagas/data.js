import { call, put } from 'redux-saga/effects';
import { doDataSuccess, doDataError } from '../actions/data';
import { fetchGlobalData } from '../api/data';

function* handleFetchData() {
  try {
    const result = yield call(fetchGlobalData);
    yield put(doDataSuccess(result.data));
  } catch {
    yield put(doDataError);
  }
}

export { handleFetchData };
