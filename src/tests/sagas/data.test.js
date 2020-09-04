import { call, select, delay } from 'redux-saga/effects';

import {
  COUNTRIES_URL,
  HISTORICAL_DATA_URL,
} from '../../api/api';
import { fetchData } from '../../api/';
import {
  fetchResource,
  fetchCountriesData,
  fetchHistoricalCountryData,
} from '../../sagas/data';
import {
  doHistoricalDataError,
  doHistoricalDataSuccess,
} from '../../actions/historicalData';
import {
  doCountriesDataError,
  doCountriesDataSuccess,
} from '../../actions/countriesData';

describe('fetchCountriesData', () => {
  it('delays re-run', () => {
    const gen = fetchCountriesData();

    expect(gen.next().value).toEqual(
      call(
        fetchResource,
        COUNTRIES_URL,
        doCountriesDataSuccess,
        doCountriesDataError
      ));
    expect(gen.next().value).toEqual(delay(600000));
    expect(gen.next().done).toEqual(false);
  });
});

describe('fetchHistoricalCountryData', () => {
  it('retrieves endPoint', async () => {
    const endPoint = 'Albania';
    const url = HISTORICAL_DATA_URL + endPoint + '?lastdays=365';

    const gen = fetchHistoricalCountryData();

    // hack to solve Jest throws error " Received: serializes to the same string"
    expect(JSON.stringify(gen.next().value))
      .toEqual(JSON.stringify(select(() => endPoint)));
    expect(gen.next(endPoint).value).toEqual(
      call(
        fetchResource,
        url,
        doHistoricalDataSuccess,
        doHistoricalDataError
      ));
    expect(gen.next().done).toEqual(true);
  });
});
