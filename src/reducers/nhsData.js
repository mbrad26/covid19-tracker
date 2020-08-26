import {
  NHS_DATA_ERROR,
  NHS_DATA_LOADING,
  NHS_DATA_SUCCESS,
} from '../constants/actionTypes';
import createReducer from './createReducer';

const nhsDataReducer = createReducer({
  error: NHS_DATA_ERROR,
  loading: NHS_DATA_LOADING,
  success: NHS_DATA_SUCCESS,
});

export default nhsDataReducer;
