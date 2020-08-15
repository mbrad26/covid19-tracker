import { takeEvery, all } from 'redux-saga/effects';
import { DATA_LOADING } from '../constants/actionTypes.js';
import { fetchGlobalData } from './data';

function* watchAll() {
  yield all([
    takeEvery(DATA_LOADING, fetchGlobalData),
  ])
};

export default watchAll;
