import {
  RESET,
  ZOOM_ON_COUNTRY,
  CHANGE_VIEWPORT,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  width: window.innerWidth * 0.58,
  height: window.innerHeight * 0.65,
  latitude: 20,
  longitude: 10,
  zoom: 0.93,
  minZoom: 0.3,
  maxZoom: 11,
}

const mapboxDataReducer = (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case RESET:
      return {
        ...state,
        latitude: INITIAL_STATE.latitude,
        longitude: INITIAL_STATE.longitude,
        zoom: INITIAL_STATE.zoom,
      };
    case CHANGE_VIEWPORT:
        return {
          ...state,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          zoom: action.payload.zoom,
        };
    case ZOOM_ON_COUNTRY:
      return {
        ...state,
        latitude: action.payload.countryInfo.lat,
        longitude: action.payload.countryInfo.long,
        zoom: 4.1,
      };
    default: return state;
  }
};

export default mapboxDataReducer;
