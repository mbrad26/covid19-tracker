import { SET_ACTIVE, SET_INACTIVE } from '../constants/actionTypes';

const INITIAL_STATE = {
  active: null
}

const countryDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case SET_INACTIVE:
      return {
        ...state,
        active: null,
      }
    default: return state;
  }
}

export default countryDataReducer;
