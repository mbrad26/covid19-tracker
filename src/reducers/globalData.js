import { GLOBAL_DATA_LOADING, GLOBAL_DATA_SUCCESS, GLOBAL_DATA_ERROR } from '../constants/actionTypes';
import createReducer from './createReducer';

const globalDataReducer = createReducer({
  loading: GLOBAL_DATA_LOADING,
  success: GLOBAL_DATA_SUCCESS,
  error: GLOBAL_DATA_ERROR,
});

export default globalDataReducer;
