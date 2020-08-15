import { INITIAL_STATE } from './initialState';

const createReducer = constants => (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case constants.loading:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case constants.success:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case constants.error:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default: return state;
  }
}

export default createReducer;
