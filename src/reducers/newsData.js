import {
  NEWS_DATA_ERROR,
  NEWS_DATA_LOADING,
  NEWS_DATA_SUCCESS,
} from '../constants/actionTypes';
import createReducer from './createReducer';

const newsDataReducer = createReducer({
  error: NEWS_DATA_ERROR,
  loading: NEWS_DATA_LOADING,
  success: NEWS_DATA_SUCCESS,
});

export default newsDataReducer;
