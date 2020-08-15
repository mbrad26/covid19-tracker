import { combineReducers } from 'redux';
import globalDataReducer from './globalData';
import countriesDataReducer from './countriesData';

const rootReducer = combineReducers({
  globalDataState: globalDataReducer,
  countriesDataState: countriesDataReducer,
});

export default rootReducer;
