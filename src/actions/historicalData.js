import {
  HISTORICAL_DATA_LOADING,
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_DATA_ERROR,
  HISTORICAL_URL_ENDPOINT,
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

const doUpdateEndPoint = endPoint => ({
  type: HISTORICAL_URL_ENDPOINT,
  payload: endPoint,
});

export {
  doHistoricalDataLoading,
  doHistoricalDataSuccess,
  doHistoricalDataError,
  doUpdateEndPoint,
};
