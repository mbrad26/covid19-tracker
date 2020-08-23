const getViewPort = state => state

const getData = state => state.data

const getActiveCountry = state => state.active

const getIsErrorStatus = state => state.isError;

const getIsLoadingStatus = state => state.isLoading;

export {
  getData,
  getViewPort,
  getActiveCountry,
  getIsErrorStatus,
  getIsLoadingStatus,
};
