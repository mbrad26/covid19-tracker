import {
  DATA_LOADING,
  DATA_SUCCESS,
  DATA_ERROR
} from '../constants/actionTypes';

const doGlobalDataLoading = () => ({
  type: DATA_LOADING,
});

const doGlobalDataSuccess = data => ({
  type: DATA_SUCCESS,
  payload: data,
})

const doGlobalDataError = () => ({
  type: DATA_ERROR,
})

export { doGlobalDataLoading, doGlobalDataSuccess, doGlobalDataError };
