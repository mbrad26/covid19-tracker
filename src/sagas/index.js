import { takeEvery, all } from 'redux-saga/effects';
import { DATA_LOADING } from '../constants/actionTypes.js';
import { fetchGlobalData, fetchCountriesData } from './data';

function* watchAll() {
  yield all([
    takeEvery(DATA_LOADING, fetchGlobalData),
    takeEvery(DATA_LOADING, fetchCountriesData),
  ])
};

export default watchAll;
