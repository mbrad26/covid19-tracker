import {
  NHS_ERROR,
  NHS_LOADING,
  NHS_SUCCESS,
} from '../constants/actionTypes.js';
import createReducer from './createReducer';

const nhsDataReducer = createReducer({
  error: NHS_ERROR,
  loading: NHS_LOADING,
  success: NHS_SUCCESS,
});

export default nhsDataReducer;
