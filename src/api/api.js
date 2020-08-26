export const BASE_URL = 'https://corona.lmao.ninja/v2/';
export const GLOBAL_URL = `${BASE_URL}all`;
export const COUNTRIES_URL = `${BASE_URL}countries`;
export const HISTORICAL_DATA_URL = `${BASE_URL}historical/`;

export const NEWS_URL = `https://newsapi.org/v2/everything?q=covid-19&sources=,associated-press,bbc-news,cnn&apiKey=${process.env.REACT_APP_NEWS_TOKEN}`;

export const NHS_URL = 'https://api.nhs.uk/conditions/coronavirus-covid-19?url=Covid-19%20Tracker&modules=false';
