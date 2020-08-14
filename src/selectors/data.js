const getIsLoadingStatus = ({ dataState }) =>
  dataState.isLoading;

const getData = ({ dataState }) =>
  dataState.data

const getIsErrorStatus = ({ dataState }) =>
  dataState.isError;

export { getIsLoadingStatus, getData, getIsErrorStatus };
