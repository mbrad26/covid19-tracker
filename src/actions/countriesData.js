import {
  COUNTRIES_DATA_LOADING,
  COUNTRIES_DATA_SUCCESS,
  COUNTRIES_DATA_ERROR
} from '../constants/actionTypes.js';

const doCountriesDataLoading = () => ({
  type: COUNTRIES_DATA_LOADING,
});

const doCountriesDataSucces = data => ({
  type: COUNTRIES_DATA_SUCCESS,
  payload: data,
});

const doCountriesDataError = => ({
  type: COUNTRIES_DATA_ERROR,
});

export { doCountriesDataLoading, doCountriesDataSucces, doCountriesDataError};
