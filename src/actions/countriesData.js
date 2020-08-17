import {
  COUNTRIES_DATA_LOADING,
  COUNTRIES_DATA_SUCCESS,
  COUNTRIES_DATA_ERROR,
  COUNTRIES_DATA_SORT,
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

const doCountriesDataSort = (key, sort) => ({
  type: COUNTRIES_DATA_SORT,
  key: key,
  sort: sort,
})

export {
  doCountriesDataLoading,
  doCountriesDataSuccess,
  doCountriesDataError,
  doCountriesDataSort,
};
