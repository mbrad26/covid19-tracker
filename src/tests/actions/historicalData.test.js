import {
  doUpdateEndPoint,
  doHistoricalDataError,
  doHistoricalDataLoading,
  doHistoricalDataSuccess,
  doHistoricalCountryDataLoading,
} from '../../actions/historicalData.js';

describe('doUpdateEndPoint', () => {
  it('returns the correct object', () => {
    const endPoint = 'endPoint';
    const action = doUpdateEndPoint(endPoint);
    const expectedAction = {
      type: 'HISTORICAL_URL_ENDPOINT_UPDATE',
      payload: endPoint,
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doHistoricalDataError', () => {
  it('returns the correct object', () => {
    const action = doHistoricalDataError();
    const expectedAction = {
      type: 'HISTORICAL_DATA_ERROR',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doHistoricalDataLoading', () => {
  it('returns the correct object', () => {
    const action = doHistoricalDataLoading();
    const expectedAction = {
      type: 'HISTORICAL_DATA_LOADING',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doHistoricalDataSuccess', () => {
  it('returns the correct object', () => {
    const data = {};
    const action = doHistoricalDataSuccess(data);
    const expectedAction = {
      type: 'HISTORICAL_DATA_SUCCESS',
      payload: data,
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doHistoricalCountryDataLoading', () => {
  it('returns the correct object', () => {
    const action = doHistoricalCountryDataLoading();
    const expectedAction = {
      type: 'HISTORICAL_COUNTRY_DATA_LOADING',
    };

    expect(action).toEqual(expectedAction);
  });
});
