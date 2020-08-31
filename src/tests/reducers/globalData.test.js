import globalDataReducer from '../../reducers/globalData';

describe('globalDataReducer', () => {
  it('returns isLoading === true', () => {
    const action = { type: 'DATA_LOADING' };
    const state = { data: [], isLoading: false, isError: false };
    const expectedState = { data: [], isLoading: true, isError: false };

    const newState = globalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with data', () => {
    const data = {};
    const action = { type: 'DATA_SUCCESS', payload: data };
    const state = { data: [], isLoading: true, isError: false };
    const expectedState = { data: {}, isLoading: false, isError: false };

    const newState = globalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });
  //
  it('returns isError === true', () => {
    const action = { type: 'DATA_ERROR' };
    const state = { data: [], isLoading: true, isError: false };
    const expectedState = { data: [], isLoading: false, isError: true };

    const newState = globalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns default state', () => {
    const action = { type: 'WRONG_ACTION' };
    const state = { data: [], isLoading: false, isError: false };
    const expectedState = { data: [], isLoading: false, isError: false };

    const newState = globalDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });
});
