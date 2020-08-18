import { call, put, delay } from 'redux-saga/effects';

import { doGlobalDataSuccess, doGlobalDataError } from '../actions/globalData';
import { doCountriesDataSuccess, doCountriesDataError } from '../actions/countriesData';
import { doHistoricalDataSuccess, doHistoricalDataError } from '../actions/historicalData';
import { GLOBAL_URL, COUNTRIES_URL, HISTORICAL_DATA } from '../api/api';
import { fetchData } from '../api';

function* fetchResource(url, actionSuccess, actionError) {
  try {
    const result = yield call(fetchData, url);
    yield put(actionSuccess(result.data));
  } catch {
    yield put(actionError);
  }
};

function* fetchGlobalData() {
  while(true) {
    yield call(fetchResource, GLOBAL_URL, doGlobalDataSuccess, doGlobalDataError);
    yield delay(60000);
  }
};

function* fetchCountriesData() {
  while(true) {
    yield call(fetchResource, COUNTRIES_URL, doCountriesDataSuccess, doCountriesDataError);
    yield delay(60000);
  }
};

function* fetchHistoricalData() {
  yield call(fetchResource, HISTORICAL_DATA, doHistoricalDataSuccess, doHistoricalDataError);
};

export { fetchGlobalData, fetchCountriesData, fetchHistoricalData };
