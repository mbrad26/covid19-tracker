/* istanbul ignore file */
import { call, put, delay, select } from 'redux-saga/effects';

import { fetchData } from '../api';
import {
  NHS_URL,
  NEWS_URL,
  GLOBAL_URL,
  COUNTRIES_URL,
  HISTORICAL_DATA_URL,
} from '../api/api';
import { doNHSSuccess, doNHSError } from '../actions/nhsData';
import { doNewsSuccess, doNewsError } from '../actions/newsData';
import { doDataSuccess, doDataError } from '../actions/globalData';
import { doCountriesDataSuccess, doCountriesDataError } from '../actions/countriesData';
import { doHistoricalDataSuccess, doHistoricalDataError } from '../actions/historicalData';

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
    yield call(
      fetchResource,
      GLOBAL_URL,
      doDataSuccess,
      doDataError
    );
    yield delay(600000);
  };
};

function* fetchNewsData() {
  while(true) {
    yield call(
      fetchResource,
      NEWS_URL,
      doNewsSuccess,
      doNewsError,
    );
    yield delay(1000000);
  };
};

function* fetchNHSData() {
  while(true) {
    yield call(
      fetchResource,
      NHS_URL,
      doNHSSuccess,
      doNHSError
    );
    yield delay(10000000);
  };
};

function* fetchCountriesData() {
  while(true) {
    yield call(
      fetchResource,
      COUNTRIES_URL,
      doCountriesDataSuccess,
      doCountriesDataError
    );
    yield delay(600000);
  };
};

function* fetchHistoricalData() {
  const endPoint = 'all?lastdays=365'
  yield call(
    fetchResource,
    HISTORICAL_DATA_URL + endPoint,
    doHistoricalDataSuccess,
    doHistoricalDataError
  );
};

function* fetchHistoricalCountryData() {
  const endPoint = yield select(state =>
    state.historicalDataState.endPoint);
  try {
    yield call(
      fetchResource,
      HISTORICAL_DATA_URL + endPoint + '?lastdays=365',
      doHistoricalDataSuccess,
      doHistoricalDataError
    );
  } catch(e) {
    console.log(e);
  };
};

export {
  fetchNHSData,
  fetchNewsData,
  fetchGlobalData,
  fetchCountriesData,
  fetchHistoricalData,
  fetchHistoricalCountryData,
 };
