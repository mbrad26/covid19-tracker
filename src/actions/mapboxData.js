import { ZOOM_ON_COUNTRY } from '../constants/actionTypes';

const doZoomOnCountry = data => {
  type: ZOOM_ON_COUNTRY,
  payload: data,
};

export { doZoomOnCountry };
