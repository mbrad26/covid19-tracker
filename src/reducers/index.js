import { combineReducers } from 'redux';
import globalDataReducer from './globalData';
import countriesDataReducer from './countriesData';
import historicalDataReducer from './historicalData';

const rootReducer = combineReducers({
  globalDataState: globalDataReducer,
  countriesDataState: countriesDataReducer,
  historicalDataState: historicalDataReducer,
});

export default rootReducer;
