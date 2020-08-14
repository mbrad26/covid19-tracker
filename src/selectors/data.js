const getIsLoadingStatus = ({ globalDataState }) =>
  globalDataState.isLoading;

const getData = ({ globalDataState }) =>
  globalDataState.data

const getIsErrorStatus = ({ globalDataState }) =>
  globalDataState.isError;

export { getIsLoadingStatus, getData, getIsErrorStatus };
