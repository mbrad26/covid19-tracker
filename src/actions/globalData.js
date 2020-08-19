import {
  DATA_LOADING,
  DATA_SUCCESS,
  DATA_ERROR
} from '../constants/actionTypes';

const doDataLoading = () => ({
  type: DATA_LOADING,
});

const doDataSuccess = data => ({
  type: DATA_SUCCESS,
  payload: data,
})

const doDataError = () => ({
  type: DATA_ERROR,
})

export { doDataLoading, doDataSuccess, doDataError };
