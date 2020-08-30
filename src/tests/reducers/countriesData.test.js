import countriesDataReducer from '../../reducers/countriesData';
import { unsortedData, sortedAscData } from '../fixtures';

describe('countriesDataReducer', () => {
  it('returns isLoading === true', () => {
    const action = { type: 'COUNTRIES_DATA_LOADING' };
    const state = { data: [], isLoading: false, isError: false };
    const expectedState = { data: [], isLoading: true, isError: false };

    const newState = countriesDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with data', () => {
    const data = {};
    const action = { type: 'COUNTRIES_DATA_SUCCESS', payload: data };
    const state = { data: [], isLoading: true, isError: false };
    const expectedState = { data: {}, isLoading: false, isError: false };

    const newState = countriesDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns isError === true', () => {
    const action = { type: 'COUNTRIES_DATA_ERROR' };
    const state = { data: [], isLoading: true, isError: false };
    const expectedState = { data: [], isLoading: false, isError: true };

    const newState = countriesDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with data sorted ascending', () => {
    const key = 'cases';
    const sort = 'asc';
    const action = { type: 'COUNTRIES_DATA_SORT', key: key, sort: sort };
    const state = { data: unsortedData, isLoading: false, isError: false };
    const expectedState = { data: sortedAscData, isLoading: false, isError: false };

    const newState = countriesDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with data sorted descending', () => {
    const key = 'cases';
    const sort = 'desc';
    const action = { type: 'COUNTRIES_DATA_SORT', key: key, sort: sort };
    const state = { data: unsortedData, isLoading: false, isError: false };
    const expectedState = { data: sortedAscData.reverse(), isLoading: false, isError: false };

    const newState = countriesDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns default state', () => {
    const action = { type: 'WRONG_ACTION' };
    const state = { data: [], isLoading: false, isError: false };
    const expectedState = { data: [], isLoading: false, isError: false };

    const newState = countriesDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });
});
