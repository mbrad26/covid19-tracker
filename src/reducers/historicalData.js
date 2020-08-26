import {
  HISTORICAL_DATA_ERROR,
  HISTORICAL_DATA_LOADING,
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_URL_ENDPOINT_UPDATE,
  HISTORICAL_COUNTRY_DATA_LOADING,
} from '../constants/actionTypes';
import { INITIAL_STATE } from './initialState';

const historicalDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HISTORICAL_DATA_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case HISTORICAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case HISTORICAL_DATA_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case HISTORICAL_URL_ENDPOINT_UPDATE:
      return {
        ...state,
        endPoint: action.payload,
      };
    case HISTORICAL_COUNTRY_DATA_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    default: return state;
    };
};

export default historicalDataReducer;
