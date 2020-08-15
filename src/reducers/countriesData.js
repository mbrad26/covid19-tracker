import { COUNTRIES_DATA_LOADING, COUNTRIES_DATA_SUCCESS, COUNTRIES_DATA_ERROR } from '../constants/actionTypes';
import createReducer from './createReducer';

const countriesDataReducer = createReducer({
  loading: COUNTRIES_DATA_LOADING,
  success: COUNTRIES_DATA_SUCCESS,
  error: COUNTRIES_DATA_ERROR,
});

export default countriesDataReducer;
