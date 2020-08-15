const getIsLoadingStatus = state =>
  state.isLoading;

const getData = state =>
  state.data

const getIsErrorStatus = state =>
  state.isError;

export { getIsLoadingStatus, getData, getIsErrorStatus };
