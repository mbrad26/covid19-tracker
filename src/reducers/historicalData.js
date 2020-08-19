import {
  HISTORICAL_DATA_LOADING,
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_DATA_ERROR,
  HISTORICAL_URL_ENDPOINT,
} from '../constants/actionTypes';
import { INITIAL_STATE } from './initialState';

// import createReducer from './createReducer';
//
// const historicalDataReducer = createReducer({
//   loading: HISTORICAL_DATA_LOADING,
//   success: HISTORICAL_DATA_SUCCESS,
//   error: HISTORICAL_DATA_ERROR,
// });

const historicalDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HISTORICAL_DATA_LOADING:
      return {
        ...state,
        endPoint: 'all',
        isLoading: true,
        isError: false,
      };
  case HISTORICAL_DATA_SUCCESS:
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  case HISTORICAL_DATA_ERROR:
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  case HISTORICAL_URL_ENDPOINT:
    return {
      ...state,
      endPoint: action.payload,
    };
  default: return state;
  };
};

export default historicalDataReducer;
