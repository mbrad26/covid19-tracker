import {
  doNewsError,
  doNewsLoading,
  doNewsSuccess,
} from '../../actions/newsData';

describe('doNewsError', () => {
  it('returns the correct object', () => {
    const action = doNewsError();
    const expectedAction = {
      type: 'NEWS_DATA_ERROR',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doNewsLoading', () => {
  it('returns the correct object', () => {
    const action = doNewsLoading();
    const expectedAction = {
      type: 'NEWS_DATA_LOADING',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doNewsSuccess', () => {
  it('returns the correct object', () => {
    const data = {};
    const action = doNewsSuccess(data);
    const expectedAction = {
      type: 'NEWS_DATA_SUCCESS',
      payload: data,
    };

    expect(action).toEqual(expectedAction);
  });
});
