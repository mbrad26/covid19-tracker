import { ZOOM_ON_COUNTRY } from '../constants/actionTypes';

const INITIAL_STATE = {
  width: window.innerWidth * 0.65,
  height: window.innerHeight * 0.70,
  latitude: 25,
  longitude: 7,
  zoom: 1.1,
}

const mapboxDataReducer = (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case ZOOM_ON_COUNTRY:
      return {
        ...state,
        latitude: action.payload,
        longitude: action.payload,
        zoom: 3.5,
      };
    default: return state;
  }
};

export default mapboxDataReducer;
