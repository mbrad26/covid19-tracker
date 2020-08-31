import countryDataReducer from '../../reducers/countryData';

describe('countryDataReducer', () => {
  it('returns state with active object', () => {
    const data = {};
    const action = { type: 'SET_ACTIVE', payload: data };
    const state = { active: null };
    const expectedState = { active: data };

    const newState = countryDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with inactive object', () => {
    const data = {};
    const action = { type: 'SET_INACTIVE' };
    const state = { active: data };
    const expectedState = { active: null };

    const newState = countryDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state when action type is wrong', () => {
    const data = {};
    const action = { type: 'WRONG_ACTION' };
    const state = { active: data };
    const expectedState = { active: data };

    const newState = countryDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });
});
