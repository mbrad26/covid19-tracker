import { DATA_LOADING, DATA_SUCCESS, DATA_ERROR } from '../constants/actionTypes.js';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false,
}

const dataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default: return state;
  };
};

export default dataReducer;
