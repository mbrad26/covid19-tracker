import {
  doCountriesDataLoading,
  doCountriesDataSuccess,
  doCountriesDataError,
  doCountriesDataSort,
} from '../../actions/countriesData';

describe('doCountriesDataLoading', () => {
  it('returns the correct object', () => {
    const action = doCountriesDataLoading();
    const expectedAction = {
      type: 'COUNTRIES_DATA_LOADING',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doCountriesDataSuccess', () => {
  it('returns the correct object', () => {
    const data = {}
    const action = doCountriesDataSuccess(data);
    const expectedAction = {
      type: 'COUNTRIES_DATA_SUCCESS',
      payload: data,
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doCountriesDataError', () => {
  it('returns the correct object', () => {
    const action = doCountriesDataError();
    const expectedAction = {
      type: 'COUNTRIES_DATA_ERROR',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doCountriesDataSort', () => {
  it('returns the correct object', () => {
    const sort = 'asc';
    const key = 'France';
    const action = doCountriesDataSort(key, sort);
    const expectedAction = {
      type: 'COUNTRIES_DATA_SORT',
      key,
      sort,
    };

    expect(action).toEqual(expectedAction);
  });
});
