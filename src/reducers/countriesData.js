import {
  COUNTRIES_DATA_LOADING,
  COUNTRIES_DATA_SUCCESS,
  COUNTRIES_DATA_ERROR,
  COUNTRIES_DATA_SORT,
} from '../constants/actionTypes';
import { INITIAL_STATE } from './initialState';
// import createReducer from './createReducer';
//
// const countriesDataReducer = createReducer({
//   loading: COUNTRIES_DATA_LOADING,
//   success: COUNTRIES_DATA_SUCCESS,
//   error: COUNTRIES_DATA_ERROR,
// });

const countriesDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COUNTRIES_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case COUNTRIES_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case COUNTRIES_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
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
