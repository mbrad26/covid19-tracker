import {
  DATA_LOADING,
  DATA_SUCCESS,
  DATA_ERROR
} from '../constants/actionTypes';
import createReducer from './createReducer';

const globalDataReducer = createReducer({
  loading: DATA_LOADING,
  success: DATA_SUCCESS,
  error: DATA_ERROR,
});

export default globalDataReducer;
