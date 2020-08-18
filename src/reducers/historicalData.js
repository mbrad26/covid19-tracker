import {
  HISTORICAL_DATA_LOADING,
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_DATA_ERROR,
} from '../constants/actionTypes';

import createReducer from './createReducer';

const historicalDataReducer = createReducer({
  loading: HISTORICAL_DATA_LOADING,
  success: HISTORICAL_DATA_SUCCESS,
  error: HISTORICAL_DATA_ERROR,
});

export default historicalDataReducer;
