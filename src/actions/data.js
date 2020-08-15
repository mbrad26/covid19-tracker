import { GLOBAL_DATA_LOADING, GLOBAL_DATA_SUCCESS, GLOBAL_DATA_ERROR } from '../constants/actionTypes.js'

const doDataLoading = () => ({
  type: GLOBAL_DATA_LOADING,
});

const doDataSuccess = data => ({
  type: GLOBAL_DATA_SUCCESS,
  payload: data,
})

const doDataError = () => ({
  type: GLOBAL_DATA_ERROR,
})

export { doDataLoading, doDataSuccess, doDataError };
