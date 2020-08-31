import historicalDataReducer from '../../reducers/historicalData';

describe('historicalDataReducer', () => {
  it('returns state with isLoading === true', () => {
    const action = { type: 'HISTORICAL_DATA_LOADING' };
    const state = { data: [], isLoading: false, isError: false };
    const expectedState = { data: [], isLoading: true, isError: false };

    const newState = historicalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with fetched data', () => {
    const data = {};
    const action = { type: 'HISTORICAL_DATA_SUCCESS', payload: data };
    const state = { data: [], isLoading: true, isError: false };
    const expectedState = { data: data, isLoading: false, isError: false };

    const newState = historicalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with isError === true', () => {
    const action = { type: 'HISTORICAL_DATA_ERROR' };
    const state = { data: [], isLoading: true, isError: false };
    const expectedState = { data: [], isLoading: false, isError: true };

    const newState = historicalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with endPoint', () => {
    const data= {};
    const endPoint = 'UK';
    const action = { type: 'HISTORICAL_URL_ENDPOINT_UPDATE', payload: endPoint };
    const state = { data: data, isLoading: false, isError: false };
    const expectedState = { data: data, isLoading: false, isError: false, endPoint: endPoint };

    const newState = historicalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with endPoint', () => {
    const action = { type: 'HISTORICAL_COUNTRY_DATA_LOADING' };
    const state = { data: [], isLoading: false, isError: false };
    const expectedState = { data: [], isLoading: true, isError: false };

    const newState = historicalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state when action type is wrong', () => {
    const action = { type: 'WRONG_ACTION' };
    const state = { data: [], isLoading: false, isError: false };
    const expectedState = { data: [], isLoading: false, isError: false };

    const newState = historicalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });
});
