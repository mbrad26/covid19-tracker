import {
  ZOOM_ON_COUNTRY,
  RESET,
  CHANGE_VIEWPORT,
} from '../constants/actionTypes';

const doZoomOnCountry = data => ({
  type: ZOOM_ON_COUNTRY,
  payload: data,
});

const doReset = () => ({
  type: RESET,
});

const doChangeViewPort = viewPort => ({
  type: CHANGE_VIEWPORT,
  payload: viewPort,
});

export { doZoomOnCountry, doReset, doChangeViewPort };
