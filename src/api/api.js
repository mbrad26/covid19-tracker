import { endPoint } from '../components/DataCards/DataCards';

const BASE_URL = 'https://disease.sh/v3/covid-19/';
export const GLOBAL_URL = `${BASE_URL}all`;
export const COUNTRIES_URL = `${BASE_URL}countries`;
export const HISTORICAL_DATA = `${BASE_URL}historical/${endPoint}`;
