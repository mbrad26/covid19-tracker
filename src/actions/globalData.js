import {
  DATA_ERROR,
  DATA_LOADING,
  DATA_SUCCESS,
} from '../constants/actionTypes';

const doDataLoading = () => ({
  type: DATA_LOADING,
});

const doDataSuccess = data => ({
  type: DATA_SUCCESS,
  payload: data,
});

const doDataError = () => ({
  type: DATA_ERROR,
});

export { doDataLoading, doDataSuccess, doDataError };
