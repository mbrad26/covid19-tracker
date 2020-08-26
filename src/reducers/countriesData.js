import {
  COUNTRIES_DATA_SORT,
  COUNTRIES_DATA_ERROR,
  COUNTRIES_DATA_LOADING,
  COUNTRIES_DATA_SUCCESS,
} from '../constants/actionTypes';
import { INITIAL_STATE } from './initialState';

const countriesDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COUNTRIES_DATA_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case COUNTRIES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case COUNTRIES_DATA_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case COUNTRIES_DATA_SORT:
      return {
        ...state,
        data: action.sort === 'asc'
                  ? state.data.sort((a, b) => a[action.key] - b[action.key])
                  : state.data.sort((a, b) => b[action.key] - a[action.key])
      }
    default: return state;
  };
};

export default countriesDataReducer;
