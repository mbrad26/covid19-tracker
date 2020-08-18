import { takeEvery, all } from 'redux-saga/effects';
import {
  GLOBAL_DATA_LOADING,
  COUNTRIES_DATA_LOADING,
  HISTORICAL_DATA_LOADING,
} from '../constants/actionTypes';
import {
  fetchGlobalData,
  fetchCountriesData,
  fetchHistoricalData,
} from './data';

function* watchAll() {
  yield all([
    takeEvery(GLOBAL_DATA_LOADING, fetchGlobalData),
    takeEvery(COUNTRIES_DATA_LOADING, fetchCountriesData),
    takeEvery(HISTORICAL_DATA_LOADING, fetchHistoricalData),
  ])
};

export default watchAll;
