import {
  doNHSError,
  doNHSLoading,
  doNHSSuccess
} from '../../actions/nhsData';

describe('doNHSError', () => {
  it('returns the correct object', () => {
    const action = doNHSError();
    const expectedAction = {
      type: 'NHS_DATA_ERROR',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doNHSLoading', () => {
  it('returns the correct object', () => {
    const action = doNHSLoading();
    const expectedAction = {
      type: 'NHS_DATA_LOADING',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doNHSSuccess', () => {
  it('returns the correct object', () => {
    const data = {};
    const action = doNHSSuccess(data);
    const expectedAction = {
      type: 'NHS_DATA_SUCCESS',
      payload: data,
    };

    expect(action).toEqual(expectedAction);
  });
});
