import {
  RESET,
  ZOOM_ON_COUNTRY,
  CHANGE_VIEWPORT,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  zoom: 0.93,
  maxZoom: 11,
  minZoom: 0.7,
  latitude: 30,
  longitude: 10,
  width: window.innerWidth * 0.58,
  height: window.innerHeight * 0.65,
}

const mapboxDataReducer = (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case RESET:
      return {
        ...state,
        zoom: INITIAL_STATE.zoom,
        latitude: INITIAL_STATE.latitude,
        longitude: INITIAL_STATE.longitude,
      };
    case CHANGE_VIEWPORT:
        return {
          ...state,
          zoom: action.payload.zoom,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        };
    case ZOOM_ON_COUNTRY:
      return {
        ...state,
        zoom: 4.1,
        latitude: action.payload.countryInfo.lat,
        longitude: action.payload.countryInfo.long,
      };
    default: return state;
  }
};

export default mapboxDataReducer;
