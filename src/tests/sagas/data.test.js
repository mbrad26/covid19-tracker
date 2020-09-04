import { call, select, delay } from 'redux-saga/effects';

import {
  NHS_URL,
  NEWS_URL,
  COUNTRIES_URL,
  HISTORICAL_DATA_URL,
} from '../../api/api';
import { fetchData } from '../../api/';
import {
  fetchNHSData,
  fetchNewsData,
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
import {
  doNHSError,
  doNHSSuccess,
} from '../../actions/nhsData';
import {
  doNewsError,
  doNewsSuccess,
} from '../../actions/newsData';

describe('fetchNewsData', () => {
  it('delays re-run', () => {
    const gen = fetchNewsData();

    expect(gen.next().value).toEqual(
      call(
        fetchResource,
        NEWS_URL,
        doNewsSuccess,
        doNewsError
      ));
    expect(gen.next().value).toEqual(delay(1000000));
    expect(gen.next().done).toEqual(false);
  });
});

describe('fetchNHSData', () => {
  it('delays re-run', () => {
    const gen = fetchNHSData();

    expect(gen.next().value).toEqual(
      call(
        fetchResource,
        NHS_URL,
        doNHSSuccess,
        doNHSError
      ));
    expect(gen.next().value).toEqual(delay(10000000));
    expect(gen.next().done).toEqual(false);
  });
});

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
