import { takeEvery, all } from 'redux-saga/effects';

import {
  DATA_LOADING,
  COUNTRIES_DATA_LOADING,
  HISTORICAL_DATA_LOADING,
  HISTORICAL_COUNTRY_DATA_LOADING,
} from '../constants/actionTypes';
import {
  fetchGlobalData,
  fetchCountriesData,
  fetchHistoricalData,
  fetchHistoricalCountryData,
} from './data';

function* watchAll() {
  yield all([
    takeEvery(DATA_LOADING, fetchGlobalData),
    takeEvery(COUNTRIES_DATA_LOADING, fetchCountriesData),
    takeEvery(HISTORICAL_DATA_LOADING, fetchHistoricalData),
    takeEvery(HISTORICAL_COUNTRY_DATA_LOADING, fetchHistoricalCountryData),
  ])
};

export default watchAll;
