import { doSetActive, doSetInactive } from '../../actions/countryData';

describe('doSetActive', () => {
  it('returns the correct object', () => {
    const data = {};
    const action = doSetActive(data);
    const expectedAction = {
      type: 'SET_ACTIVE',
      payload: data,
    }

    expect(action).toEqual(expectedAction);
  });
});

describe('doSetInactive', () => {
  it('returns the correct object', () => {
    const data = {};
    const action = doSetInactive();
    const expectedAction = {
      type: 'SET_INACTIVE',
    }

    expect(action).toEqual(expectedAction);
  });
});
