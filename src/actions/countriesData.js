import {
  COUNTRIES_DATA_LOADING,
  COUNTRIES_DATA_SUCCESS,
  COUNTRIES_DATA_ERROR,
  // SEARCH_COUNTRIES_DATA,
} from '../constants/actionTypes.js';

const doCountriesDataLoading = () => ({
  type: COUNTRIES_DATA_LOADING,
});

const doCountriesDataSuccess = data => ({
  type: COUNTRIES_DATA_SUCCESS,
  payload: data,
});

const doCountriesDataError = () => ({
  type: COUNTRIES_DATA_ERROR,
});

// const doSearchCountriesData = query => ({
//   type: SEARCH_COUNTRIES_DATA,
//   payload: query,
// })

export {
  doCountriesDataLoading,
  doCountriesDataSuccess,
  doCountriesDataError,
  // doSearchCountriesData,
};
