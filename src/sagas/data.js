import { call, put } from 'redux-saga/effects';

import { doGlobalDataSuccess, doGlobalDataError } from '../actions/globalData';
import { doCountriesDataSuccess, doCountriesDataError } from '../actions/countriesData.js';
import { fetchData } from '../api';
import { GLOBAL_URL, COUNTRIES_URL } from '../api/api';

function* fetchResource(url, actionSuccess, actionError) {
  try {
    const result = yield call(fetchData, url);
    yield put(actionSuccess(result.data));
  } catch {
    yield put(actionError);
  }
}

function* fetchGlobalData() {
  yield call(fetchResource, GLOBAL_URL, doGlobalDataSuccess, doGlobalDataError)
}

function* fetchCountriesData() {
  yield call(fetchResource, COUNTRIES_URL, doCountriesDataSuccess, doCountriesDataError);
}


export { fetchGlobalData, fetchCountriesData };
