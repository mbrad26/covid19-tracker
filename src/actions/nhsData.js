import {
  NHS_DATA_ERROR,
  NHS_DATA_LOADING,
  NHS_DATA_SUCCESS,
} from '../constants/actionTypes';

const doNHSLoading = () => ({
  type: NHS_DATA_LOADING,
});

const doNHSSuccess = data => ({
  type: NHS_DATA_SUCCESS,
  payload: data,
});

const doNHSError = () => ({
  type: NHS_DATA_ERROR,
});

export { doNHSError, doNHSLoading, doNHSSuccess };
