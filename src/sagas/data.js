import { call, put } from 'redux-saga/effects';
import { doDataSuccess, doDataError } from '../actions/data';
import { fetchData } from '../api';

function* handleFetchData() {
  try {
    const result = yield call(fetchData);
    yield put(doDataSuccess(result.data));
  } catch {
    yield put(doDataError);
  }
}

export { handleFetchData };
