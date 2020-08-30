import {
  doDataError,
  doDataLoading,
  doDataSuccess,
} from '../../actions/globalData';

describe('doDataLoading', () => {
  it('returns the correct object', () => {
    const action = doDataLoading();
    const expectedAction = {
      type: 'DATA_LOADING',
    }

    expect(action).toEqual(expectedAction);
  });
});

describe('doDataSuccess', () => {
  it('returns the correct object', () => {
    const data = {};
    const action = doDataSuccess(data);
    const expectedAction = {
      type: 'DATA_SUCCESS',
      payload: data,
    }

    expect(action).toEqual(expectedAction);
  });
});

describe('doDataError', () => {
  it('returns the correct object', () => {
    const action = doDataError();
    const expectedAction = {
      type: 'DATA_ERROR',
    }

    expect(action).toEqual(expectedAction);
  });
});
