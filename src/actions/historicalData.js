import {
  HISTORICAL_DATA_LOADING,
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_DATA_ERROR,
} from '../constants/actionTypes';

const doHistoricalDataLoading = () => ({
  type: HISTORICAL_DATA_LOADING,
});

const doHistoricalDataSuccess = data => ({
  type: HISTORICAL_DATA_SUCCESS,
  payload: data,
});

const doHistoricalDataError = () => ({
  type: HISTORICAL_DATA_ERROR,
});

export {
  doHistoricalDataLoading,
  doHistoricalDataSuccess,
  doHistoricalDataError,
};
