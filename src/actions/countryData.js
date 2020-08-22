import { SET_ACTIVE, SET_INACTIVE } from '../constants/actionTypes';

const doSetActive = data => ({
  type: SET_ACTIVE,
  payload: data,
})

const doSetInactive = () => ({
  type: SET_INACTIVE,
})

export { doSetActive, doSetInactive };
