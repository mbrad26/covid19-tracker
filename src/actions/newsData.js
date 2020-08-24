import {
  NEWS_DATA_ERROR,
  NEWS_DATA_LOADING,
  NEWS_DATA_SUCCESS,
} from '../constants/actionTypes';

const doNewsLoading = () => ({
  type: NEWS_DATA_LOADING,
});

const doNewsSuccess = data => ({
  type: NEWS_DATA_SUCCESS,
  payload: data,
});

const doNewsError = () => ({
  type: NEWS_DATA_ERROR,
});

export { doNewsError, doNewsLoading, doNewsSuccess };
