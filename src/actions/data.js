import { DATA_LOADING,  DATA_SUCCESS, DATA_ERROR } from '../constants/actionTypes.js'

const doDataLoading = () => ({
  type: DATA_LOADING,
});

const doDataSuccess = data => ({
  type: DATA_SUCCESS,
  data,
})

const doDataError = () => ({
  type: DATA_ERROR,
})
