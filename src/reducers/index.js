import { combineReducers } from 'redux';
import globalDataReducer from './globalData';
import countriesDataReducer from './countriesData';

const rootReducer = combineReducers({
  globalDataState: globalDataReducer,
  countriesDataState: countriesDataReducer,
});

// console.log('ROOTREDUCER: ', rootReducer);

export default rootReducer;
