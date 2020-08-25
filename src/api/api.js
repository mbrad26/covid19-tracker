export const BASE_URL = 'https://corona.lmao.ninja/v2/';
export const GLOBAL_URL = `${BASE_URL}all`;
export const COUNTRIES_URL = `${BASE_URL}countries`;
export const HISTORICAL_DATA_URL = `${BASE_URL}historical/`;

export const NEWS_URL = `https://newsapi.org/v2/everything?q=covid-19&sources=cnn,bbc-news&apiKey=${process.env.REACT_APP_NEWS_TOKEN}`;
