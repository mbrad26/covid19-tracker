import {
  DATA_ERROR,
  DATA_LOADING,
  DATA_SUCCESS,
} from '../constants/actionTypes';
import createReducer from './createReducer';

const globalDataReducer = createReducer({
  error: DATA_ERROR,
  loading: DATA_LOADING,
  success: DATA_SUCCESS,
});

export default globalDataReducer;
