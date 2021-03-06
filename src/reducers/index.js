import { combineReducers } from 'redux';

import nhsDataReducer from './nhsData';
import newsDataReducer from './newsData';
import mapboxDataReducer from './mapboxData';
import globalDataReducer from './globalData';
import countryDataReducer from './countryData';
import countriesDataReducer from './countriesData';
import historicalDataReducer from './historicalData';

const rootReducer = combineReducers({
  nhsDataState: nhsDataReducer,
  newsDataState: newsDataReducer,
  globalDataState: globalDataReducer,
  mapboxDataState: mapboxDataReducer,
  countryDataState: countryDataReducer,
  countriesDataState: countriesDataReducer,
  historicalDataState: historicalDataReducer,
});

export default rootReducer;
