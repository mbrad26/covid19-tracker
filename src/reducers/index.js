import { combineReducers } from 'redux';
import globalDataReducer from './globalData';
import countriesDataReducer from './countriesData';
import historicalDataReducer from './historicalData';
import countryDataReducer from './countryData';
import mapboxDataReducer from './mapboxData';

const rootReducer = combineReducers({
  globalDataState: globalDataReducer,
  countriesDataState: countriesDataReducer,
  historicalDataState: historicalDataReducer,
  countryDataState: countryDataReducer,
  mapboxDataState: mapboxDataReducer,
});

export default rootReducer;
