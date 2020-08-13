import { takeEvery, all } from 'redux-saga/effects';
import { DATA_LOADING } from '../constants/actionTypes.js';
import { handleFetchData } from './data';

function* watchAll() {
  yield all([
    takeEvery(DATA_LOADING, handleFetchData),
  ])
};

export default watchAll;
