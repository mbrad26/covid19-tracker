import { call, select } from 'redux-saga/effects';
import {
  HISTORICAL_DATA_URL,
} from '../../api/api';
import { fetchData } from '../../api/';
import { getEndPoint } from '../../selectors/data';
// import { INITIAL_STATE } from '../../reducers/initialState.js';
// import historicalDataReducer from '../../reducers/historicalData';

describe('fetchHistoricalCountryData', () => {
  it('retrieves endPoint', async () => {
    const endPoint = 'Albania';
    // const url = HISTORICAL_DATA_URL + endPoint + '?lastdays=365'

    // const gen = fetchHistoricalCountryData();
  });
});
