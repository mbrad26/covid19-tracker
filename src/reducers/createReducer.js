import { INITIAL_STATE } from './initialState';

const createReducer = constants => (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case constants.loading:
      return {
        ...state,
        isError: false,
        isLoading: true,
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
        isError: true,
        isLoading: false,
      }
    default: return state;
  }
}

export default createReducer;
