import { call, put } from 'redux-saga/effects';
import { doDataSuccess, doDataError } from '../actions/data';
import { fetchData } from '../api';
import { GLOBAL_URL, COUNTRIES_URL } from '../api/api';

function* fetchResource(url) {
  try {
    const result = yield call(fetchData, url);
    yield put(doDataSuccess(result.data));
  } catch {
    yield put(doDataError);
  }
}

function* fetchGlobalData() {
  yield call(fetchResource, GLOBAL_URL)
}


export { fetchGlobalData };
