const getIsLoadingStatus = state => state.isLoading;

const getData = state => state.data

const getIsErrorStatus = state => state.isError;

const getActiveCountry = state => state.active

const getViewPort = state => state

export {
  getIsLoadingStatus,
  getData,
  getIsErrorStatus,
  getActiveCountry,
  getViewPort,
};
