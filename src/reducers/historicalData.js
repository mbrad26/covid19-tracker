import {
  HISTORICAL_DATA_LOADING,
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_DATA_ERROR,
  HISTORICAL_URL_ENDPOINT_UPDATE,
  HISTORICAL_COUNTRY_DATA_LOADING,
} from '../constants/actionTypes';
import { INITIAL_STATE } from './initialState';

const historicalDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HISTORICAL_DATA_LOADING:
      return {
        ...state,
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
    case HISTORICAL_URL_ENDPOINT_UPDATE:
      return {
        ...state,
        endPoint: action.payload,
      };
    case HISTORICAL_COUNTRY_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    default: return state;
    };
};

export default historicalDataReducer;
