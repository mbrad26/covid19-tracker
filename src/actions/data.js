import { GLOBAL_DATA_LOADING, GLOBAL_DATA_SUCCESS, GLOBAL_DATA_ERROR } from '../constants/actionTypes.js'

const doGlobalDataLoading = () => ({
  type: GLOBAL_DATA_LOADING,
});

const doGlobalDataSuccess = data => ({
  type: GLOBAL_DATA_SUCCESS,
  payload: data,
})

const doGlobalDataError = () => ({
  type: GLOBAL_DATA_ERROR,
})

export { doGlobalDataLoading, doGlobalDataSuccess, doGlobalDataError };
