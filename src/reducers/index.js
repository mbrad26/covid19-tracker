import { combineReducers } from 'redux';
import globalDataReducer from './globalData';

const rootReducer = combineReducers({
  globalDataState: globalDataReducer,
});

export default rootReducer;
